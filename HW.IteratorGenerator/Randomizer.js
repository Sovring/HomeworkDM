'use strict'


function* generateRandomNumbers(max, quantity) {

	let count = 0;
	for (let i = count; i <= quantity; i++) {
		yield Math.round(Math.random() * max);
	}
}

let randomizer = generateRandomNumbers(30, 5);

for (let numbers of randomizer) {
	console.log(numbers);
}