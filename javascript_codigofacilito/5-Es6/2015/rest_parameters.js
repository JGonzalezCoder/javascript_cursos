// Rest parameters

function sum(...rest) {
	return rest.reduce((acc, cur) => {
		return acc + cur;
	}, 0);
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

const primes = [2, 3, 5, 7, 11, 13];
const [head, ...tail] = primes;
