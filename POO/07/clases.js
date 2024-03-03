class Person {
	//constructor
	constructor(name, lastname) {
		this.name = name
		this.lastname = lastname
	}
	//metodos
	greet() {
		return `Hello I'm ${this.name} ${this.lastname}`;
	}
}

const user1 = new Person("Jesus", "Gonzalez");
const user2 = new Person("Maria", "Acevedo");

console.log(user1.greet());
console.log(user2.greet());
