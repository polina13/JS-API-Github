var Repository = function (searchData) {
  this.repoName = searchData.name;
  this.html_url = searchData.html_url;
};

var userLookup = function (searchData) {
  this.username = searchData.name;
  this.repos = searchData.repos_url;
};
