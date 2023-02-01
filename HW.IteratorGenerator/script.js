'use strict'



function makeIterator(max) {
	return {
		[Symbol.iterator]() {
			let n = 0;

			return {
				next: function() {

				n++; 

				if(n%2 === 0 && n<=max) {
					n++;
					return {
						value: "Fizz",
						done: false
					} 
				} else {
						return {
							done:true
						}
					}	
				}
			}
		}
	}
}



for(const n of makeIterator(10)) {
	console.log(n);
}
