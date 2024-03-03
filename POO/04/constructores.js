//constructor
function Person() {
	// atributos o propiedades
	this.name = "",
	this.lastname = "",
	this.age = 0,
	// metodos
	this.fullName = function() {
		return `${this.name} ${this.lastname}`;
	}
}

const user1 = new Person();
user1.name = "Jesus";
user1.lastname = "Gonzalez";
console.log(user1.fullName());
const user2 = new Person();
user2.name = "Jorge";
user2.lastname = "Gonzalez";
console.log(user2.fullName());
const user3 = new Person();
user3.name = "Julio";
user3.lastname = "Gonzalez";
console.log(user3.fullName());
