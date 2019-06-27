const list = document.getElementById('repos')
console.log('list:', list)

const API_URL = 'https://api.github.com/search/repositories?q='
let this_will_be_foo = undefined;

loadRepos()

function loadRepos(query='newschool') {
  // old school
  // if (query === undefined) {
  //   query = 'tacocats'
  // }

  fetch(API_URL + query)
  .then(res => res.json())
  .then(foo => {
    let repos = foo.items
    repos.forEach(repo => {
      // repo= {html_url: 'www.' description: 'yes'}
      let {html_url, description, name} = repo
      let div = document.createElement('div')
      let para = document.createElement('p')
      let link = document.createElement('a')

      link.href = html_url
      link.textContent = name

      para.textContent = description

      div.appendChild(link)
      div.appendChild(para)

      list.appendChild(div)
    })
  })
}

createIssue()

function createIssue() {
  let username = 'geluso'
  let repo = 'this_repo_has_issues'
  // shortcut using string interpoloation
  // you must use ` ticks! single/double quotes will not work!
  // ticks exist below the ESC key
  // let url = '/repos/${username}/${repo}/issues'

  let params = {
    title: 'new issue ' + Math.random(),
    body: 'there\'s a bug on line 42'
  }

  let config = {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.github.symmetra-preview+json'
    },
    body: JSON.stringify(params)
  }

  let url = 'https://api.github.com/repos/' + username + '/' + repo + '/issues?access_token=5c391270a21853fa8728401e9434d7e36e18b438'
  fetch(url, config)
  .then(res => res.json())
  .then(data => {
    console.log('got:', data)
  })
}