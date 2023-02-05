'use strict'

function* limitationGenerator(start, end) {

	for(let i = start; i <= end; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			yield "FizzBuzz";
		} else if (i % 3 === 0) {
			yield "Fizz";
		} else if (i % 5 === 0) {
			yield "Buzz";
		} else {
			yield i;
		}
	}
}

const numberCount = limitationGenerator(1, 100);

for (let value of numberCount) {
	console.log(value);
}