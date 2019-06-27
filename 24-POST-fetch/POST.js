const URL = "http://localhost:3000/resource"
fetch(URL, {
  method: 'POST',
  body: JSON.stringify({title: 'Harry Potter', year: 1999}),
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
})
.then(res => res.json())
.then(json => {
  doStuff(json)
})

function doStuff(data) {
  console.log(data)
}