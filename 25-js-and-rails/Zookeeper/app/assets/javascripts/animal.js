document.addEventListener('DOMContentLoaded', main)

function main() {

	let id = window.location.pathname.split('/').pop();

	let h1 = document.querySelector('#animal_name')
	let p = document.querySelector('#animal_description')

	let configObj = {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}

	fetch(`http://localhost:3000/animals/${id}`, configObj)
		.then(resp => resp.json())
		.then(json => {
			let animal = new Animal(json)
			h1.textContent = animal.name;
			p.textContent = animal.toString();
		})


}