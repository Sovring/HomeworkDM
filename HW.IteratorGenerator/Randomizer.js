'use strict'


function* generateRandomNumbers(max, quantity) {

	let count = 1;
	for (let i = count; i <= quantity; i++) {
		yield Math.round(Math.random() * max);
	}
}

let randomizer = generateRandomNumbers(30, 10);

for (let numbers of randomizer) {
	console.log(numbers);
}