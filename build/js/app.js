(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b09e508d968731fa5afdaf5afa56d9e572f26348";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.lookUpSearch =  function(username) {
  this.username = username;
};

exports.lookUp.prototype.locateUser = function() {
  return 'https://api.github.com/users/' + username + '/repos?access_token=' + apiKey;
};

},{"./../.env":1}],3:[function(require,module,exports){

var lookUp = require('./../js/lookUp.js').lookUpSearch;

$(document).ready(function(){
  $('#submitusername').submit(function(){
    var inputUsername = $('#userName').val();
    var newUser = new gitHub(inputUsername);
    $.get(newUser.locateUser(), function(response) {
    	$('#name').prepend("<h3>The repos for " + inputUsername + " are :</h3><hr>");
    	for (var i=0; i<response.length; i++) {
        $('#showGitHubName').append("<h4>" + response[i].name + "</h4><br>" + response[i].description + "<br><hr>");
	    }
    }).fail(function(error) {
      $('#name').text(error.responseJSON.message);
    });
    $('#name').empty();
    $('#showGitHubName').empty();
  });
});

},{"./../js/lookUp.js":2}]},{},[3]);
