function Person() {
	let name;
	let lastname;
	this.setName = function(n) {
		name = n;
	}
	this.setLastname = function(ln) {
		lastname = ln;
	}
	this.getName = function() {
		return name;
	}
	this.getLastname = function() {
		return lastname;
	}
}

const person = new Person();
person.setName("jesus");
person.setLastname("gonzalez");
console.log(person.getName());
console.log(person.getLastname());
