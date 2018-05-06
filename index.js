$(document).ready(function (){
  const searchTerms = document.getElementById("searchTerms").value;
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;
  
  $.get(url).done(data => {
    const repoList = `<ul>${repos.map(r => '<li><a href="'+ r.html_url +'">' + r.name + '</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getCommits(this)">Get Commits</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`;
    document.getElementById("repositories").innerHTML = repoList;
  });
  
});

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}