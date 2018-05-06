$(document).ready(function (){
  
});

function searchRepositories(){
  const searchTerms = document.getElementById("searchTerms").value;
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;
  
  $.get(url).done(data => {
    const repoList = `<ul>${data.items.map(r => 
    <li>
     <h2><a href="{{html_url}}">{{name}}</a></h2>
     {{> authorPartial owner }}
     <p>Watchers: {{watchers_count}}</p>
     <p>Forks: {{forks_count}}</p>
     <p>Issues: {{open_issues_count}}</p>
    </li>
    '<li><a href="'+ r.html_url +'">' + r.name + '</a> - <a href="#" data-repository="' + r.name + '" data-username="' + r.owner.login + '" onclick="showCommits(this)">Show Commits</a></li>').join('')}</ul>`;
    $("#results").html(repoList);
  });
}

function showCommits() {
  
}