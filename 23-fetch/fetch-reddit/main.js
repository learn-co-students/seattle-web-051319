'use strict';

let URL = 'https://www.reddit.com/r/programmerhumor/.json'

function main() {
  fetchPosts()
}
main()

function fetchPosts() {
  fetch(URL)
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(json => {
    console.log(json)
    return addAllPosts(json.data.children)
  })
}

function addAllPosts(posts) {
  console.log(posts)
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i])
    let post = posts[i]
    addPost(post)
  }
}

function addPost(post) {
  debugger;
  const li = document.createElement('li')
  li.textContent = post.data.title

  const img = document.createElement('img')
  img.setAttribute('src', post.data.url);

  const ul = document.getElementById('results')
  ul.appendChild(li);
  ul.appendChild(img);
}