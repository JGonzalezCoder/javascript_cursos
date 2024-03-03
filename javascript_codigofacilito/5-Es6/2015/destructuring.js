// Destructuring

const obj = {
	name: "jesus",
	lastname: "gonzalez",
	age: 24,
	pets: {
		cats: ["Tavo", "kira"],
		dogs: ["Brownie", "Cookie"]
	}
}

function printFullname(obj) {
	let { name: firstname, lastname} = obj;
	return `${firstname} ${lastname}`
}

printFullname();
