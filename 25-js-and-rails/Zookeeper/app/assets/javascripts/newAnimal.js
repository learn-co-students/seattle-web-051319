document.addEventListener('DOMContentLoaded', main);

function main() {
	let form = document.querySelector('form');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		
		// prevent submission - done
		// get values for name, age, species - done
		// check if any are empty - done
		// if they are, do nothing (maybe yell at the user) - done
		// if they aren't empty, submit the form - ?

		let name = form.animal_name.value
		let age = form.animal_age.value
		let species_id = form.animal_species_id.value
		let authenticity_token = form.authenticity_token.value

		if ([name, age, species_id].some(val => val.length === 0)) {
			alert("Steve hates alerts, also your form has empty values");
		} else {
			let configObj = {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({name, age, species_id, authenticity_token})
			}

			fetch('http://localhost:3000/animals', configObj)
				.then(resp => resp.json())
				.then(function() {
					window.location = 'http://localhost:3000/animals'
				})
		}
	})
}