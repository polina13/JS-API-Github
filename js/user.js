exports.User = function (response) {
  this.username = response.login;
  this.locationUser = response.location;
  this.userPic = response.avatar_url;
}
