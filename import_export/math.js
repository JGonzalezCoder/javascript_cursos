export const secret_number = 30;

export let x = 2;
export let y = 3;

export const add = (x, y) => x + y;

export const subtract = (x, y) => x - y;

export const multiply = (x, y) => x * y;

export const divide = (x, y ) => x / y;

export class Math {
	double(number) {
		return (number * number);
	}
}

export default {
	add,
	subtract
}
