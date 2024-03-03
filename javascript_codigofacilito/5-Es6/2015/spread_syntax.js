// spread syntax

function sum(...rest) { // rest parameters
	return rest.reduce((acc, cur) => {
		return acc + cur;
	},0);
}

const primes = [2,3,5,7,11,13,17,19];

sum(...primes); // spread syntax
