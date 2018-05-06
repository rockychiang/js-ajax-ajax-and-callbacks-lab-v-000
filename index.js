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
            <p><img src="${r.owner.avatar_url}"></p>
            <p>by: <a href="https://github.com/${r.owner.login}">${r.owner.login}</a></p>
            <p><a href="#" data-repository="${r.name}" data-username="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
          </li>`
          )
    }).join('') + "</ul>"
    
    $("#results").html(repoList);
  });
}

function showCommits() {
  
}