var User = require('./../js/user.js').User;
var apiKey  = require('./../.env').apiKey;


$(document).ready(function(){
  var userGitHub;
  $("#submit-username").click(function() {
    var username = $("#userNameInput").val();
    $("#userNameInput").val("");

    $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
      var userGitHub = new User(response);

      $("#name").append("<img src='"+userGitHub.userPic + "'/>");
      $("#showGitHubName").append('<h1>' + userGitHub.username + '</h1>');
      $("#showDescription").append('<p>' + userGitHub.locationUser + '</p>');

      $.get(userGitHub.reposURL, function(response) {
        console.log(response);


          for(var i=0; i<response.length; i++) {
            $("#repoNameInput").append('<h3>' + response[i].name + '</h3>' + '<p>' + response[i].description + '</p>');
          }
      })
      .fail(function(error){
      console.log(error.responseJSON.message);
  })
})
});
});
