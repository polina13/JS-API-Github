var apiKey = require('./../.env').apiKey;

exports.gitHub = function(username) {
  this.username = username;
};

exports.gitHub.prototype.locateUser() = function () {
  return 'https://api.github.com/users/' + this.username + '/repos';
};
