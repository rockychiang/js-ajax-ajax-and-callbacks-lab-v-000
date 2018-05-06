$(document).ready(function (){
  const url = 'https://api.github.com/search/repositories?q=' + document.getElementById("searchTerms").value;
  
  $.get(url).done()
  
});

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}