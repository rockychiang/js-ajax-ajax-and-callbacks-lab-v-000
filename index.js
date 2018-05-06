$(document).ready(function (){
  
});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value;
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;
  
  $.get(url).done(data => {
    const repoList = '<ul>' + data.map(r => {
    return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            <p>Watchers: ${r.watchers_count}</p>
            <p>Forks: ${r.forks_count}</p>
            <p>Issues: ${r.open_issues_count}</p>
          </li>`
          )
    }).join('') + "</ul>"
    
    const repoList = '<ul>'${data.items.map(r => {

    '<li><a href="'+ r.html_url +'">' + r.name + '</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="showCommits(this)">Show Commits</a></li>').join('')}</ul>`;
    $("#results").html(repoList);
  });
}

function showCommits() {
  
}