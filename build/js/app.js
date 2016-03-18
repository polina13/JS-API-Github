(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b09e508d968731fa5afdaf5afa56d9e572f26348";

},{}],2:[function(require,module,exports){
exports.Repos = function (response) {
  this.repoInfo = response.repos_url;
}

},{}],3:[function(require,module,exports){
exports.User = function (response) {
  this.username = response.login;
  this.locationUser = response.location;
  this.userPic = response.avatar_url;
}

},{}],4:[function(require,module,exports){
var User = require('./../js/user.js').User;
var apiKey  = require('./../.env').apiKey;

$(document).ready(function(){
  $("#submit-username").click(function() {
    var username = $("#userNameInput").val();
    $("#userNameInput").val("");

    $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
      var userGitHub = new User(response);
      console.log(response);

      $("#name").append("<img src='"+userGitHub.userPic + "'/>");
      $("#showGitHubName").append('<h1>' + userGitHub.username + '</h1>');
      $("#showDescription").append('<p>' + userGitHub.locationUser + '</p>');
    }).fail(function(error){
      console.log(error.responseJSON.message);
    })
  });

});

var Repos = require('./../js/repos.js').Repos;
var apiKey  = require('./../.env').apiKey;

},{"./../.env":1,"./../js/repos.js":2,"./../js/user.js":3}]},{},[4]);
