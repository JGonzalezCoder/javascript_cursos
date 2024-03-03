function Person(name, lastname) {
	this.name = name,
	this.lastname = lastname,
	this.fullname = function() {
		return `${this.name} ${this.lastname}`;	
	}
}

const person1 = new Person("jesus", "gonzalez");
const person2 = new Person("julio", "gonzalez");
const person3 = new Person("jorge", "gonzalez");
const person4 = new Person("maria", "acevedo");

Person.prototype.age = 100;
Person.prototype.greet = function() {
	return `Hello I'm ${this.name} ${this.name}`;
}

console.log(person1.greet());
console.log(person2.greet());
console.log(person3.greet());
console.log(person4.greet());
