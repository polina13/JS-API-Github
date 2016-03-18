//
// var lookUp = require('./../js/lookUp.js').lookUpSearch;
//
// $(document).ready(function(){
//   $('#submitusername').submit(function(){
//     var inputUsername = $('#userName').val();
//     var newUser = new gitHub(inputUsername);
//     $.get(newUser.locateUser(), function(response) {
//     	$('#name').prepend("<h3>The repos for " + inputUsername + " are :</h3><hr>");
//     	for (var i=0; i<response.length; i++) {
//         $('#showGitHubName').append("<h4>" + response[i].name + "</h4><br>" + response[i].description + "<br><hr>");
// 	    }
//     }).fail(function(error) {
//       $('#name').text(error.responseJSON.message);
//     });
//     $('#name').empty();
//     $('#showGitHubName').empty();
//   });
// });

var github = require('./../js/github.js').gitHubSearch;


$(document).ready(function(){
  $("#search").submit(function (event) {
    event.preventDefault();
    var username = $("#userName").val();
    github(userName);
  });
});
