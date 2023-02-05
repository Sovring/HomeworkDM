'use strict'


const numbers = {
	from: 1,
 	to: 100
 }
 


numbers[Symbol.iterator] = function () {
	let count = this.from;
	let final = this.to;

	return {
		next : function() {
			if (count % 3 === 0 && count % 5 === 0) {
                let result = { done: false, value: "FizzBuzz"};
                count++;
                return result;
			} else if (count % 3 === 0) {
                let result = { done: false, value: "Fizz"};
                count++;
                return result;
			} else if (count % 5 === 0) {
                let result = { done: false, value: "Buzz"};
                count++;
                return result;
			} else if (count <= final) {
				let result = {done:false, value: count}
				count++;
				return result;
			} else {
				return {done: true};
			}
			
		}
	}
}	



for(let number of numbers) {
	console.log(number);
}
