// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener("DOMContentLoaded", main);

function main() {
	const table = document.getElementById('animal_table');

	fetch("http://localhost:3000/api/animals", {
		method: "GET",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}).then(res => res.json())
		.then(json => {
			// json.forEach(animal => addAnimal(animal))

			// These are all the same: 
			// json.forEach(function (animal) {
			// 	addAnimal(animal);
			// })

			// json.forEach(addAnimal)

			// for (animal of json) {
			// 	addAnimal(animal)
			// }

			// for (let i=0; i<json.length; i++){
			// 	addAnimal(json[i]);
			// }

			for (i in json) {
				addAnimal(json[i])
			}
		})

	function addAnimal(animal) {
		let trEl = document.createElement('tr');

		let idEl = document.createElement('td');
		idEl.textContent = animal.id;
		
		let nameEl = document.createElement('td');
		nameEl.textContent = animal.name;

		let ageEl = document.createElement('td');
		ageEl.textContent = animal.age;

		let speciesEl = document.createElement('td');
		speciesEl.textContent = animal.species.name;

		let profileEl = document.createElement('td');
		let profileLink = document.createElement('a');
		profileLink.textContent = "Show me";
		profileLink.href = `/animals/${animal.id}`;
		profileEl.appendChild(profileLink);

		trEl.appendChild(idEl);
		trEl.appendChild(nameEl);
		trEl.appendChild(ageEl);
		trEl.appendChild(speciesEl);
		trEl.appendChild(profileEl);
		table.appendChild(trEl);
	};
}