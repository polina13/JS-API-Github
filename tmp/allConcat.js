var gitHub = require('./../js/gitHub.js').gitHub;


$(document).ready(function(){
  $('#submitusername').click(function(){
    var inputUsername = $('#userName').val();
    var newUser = new userNameInput(inputUsername);
    $.get(newUser.locateUser(), function(response) {
    	$('#name').prepend("<h3>The repos for " + inputUsername + " are :</h3><hr>");
    	for (var i=0; i<response.length; i++) {
        $('#showGitHubName').append("<h4>" + response[i].name + "</h4><br>" + response[i].description + "<br><hr>");
	    }
    }).fail(function(error) {
      $('name').text(error.responseJSON.message);
    });
    $('#name').empty();
    $('#showGitHubName').empty();
  });
});
