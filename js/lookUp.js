var apiKey  = require('./../.env').apiKey;

exports.gitHubSearch = function (userName) {
  $("#name").html(" ");
  $("#showGitHubName").html(" ");
  $("#avatarImage").html(" ");
  $("#showDescription").html(" ");


  $.get('https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#name").append("<img class = 'round' src = '"+ response[0].owner.avatar_url + "'>")
    for(var i = 0; i < response.length; i  ++) {
      $("#showGitHubName").append("<div class = 'project'><a href = '"+response[i].html_url+"'><li class = 'red'> Name: " + response[i].name + "</li></a>");
      $("#showDescription").append("<div class = 'project'><li> Description " + response[i].description + "</li></div>"  );
    }

  }).fail(function(error){
    // console.log(error.responseJSON.message);
  });
