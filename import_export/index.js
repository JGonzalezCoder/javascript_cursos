import * as user from "./user.js";

import math, {
	secret_number as number,
	add as suma,
	subtract as resta,
	multiply as multiplicacion,
	divide as division,
	x,
	y,
	Math
} from "./math.js";

const add = (a,b) => {
	return `${a} ${b}`;
}

const m = new Math();

console.log(number);
console.log(suma(16,9));
console.log(resta(16,9));
console.log(multiplicacion(16,9));
console.log(division(16,9));
console.log(add("Jesus", "Gonzalez"));
console.log(`x=${x}, y=${y}`);
console.log(m.double(1024));
console.log(math.add(16,9));
console.log(user.name);
console.log(user.lastname);
console.log(user.age);
console.log(user.city);
