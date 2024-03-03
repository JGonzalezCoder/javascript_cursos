// flag y flagMap

const primes = [[2, 3, 5, 7], [11, 13, 17, 19], [23, 29]];

primes.flag(); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

primes.flatMap(primes => primes * 2); // [2, 6, 10, 14, 22, 26, 34, 38, 46, 58];


