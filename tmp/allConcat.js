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
