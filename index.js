$(document).ready(function (){
  
});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value;
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;
  
  $.get(url).done(data => {
    const repoList = `
      `<a href="'+ r.html_url +'">' + r.name + '</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getCommits(this)">Get Commits</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getBranches(this)">Get Branches</a>`;
    $("#results").html(repoList);
  });
}

function showCommits() {
  
}