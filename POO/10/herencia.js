class Person {
	constructor(v_name, v_lastname, v_age) {
		let name = v_name;
		let lastname = v_lastname;
		let age = v_age;
		this.getName = function() {
			return name;
		}
		this.getLastname = function() {
			return lastname;
		}
		this.getAge = function() {
			return age;
		}
	}
}

class Programer extends Person {
	constructor(v_name, v_lastname, v_age, v_language) {
		super(v_name, v_lastname,v_age);
		let language = v_language;
		this.getLanguage = function() {
			return language;
		}
	}
}

const person = new Person("Paola", "Lopez", 21);
const programer = new Programer("jesus", "gonzalez",23, "python");
console.log(person.getName());
console.log(person.getLastname());
console.log(person.getAge());
console.log(programer.getName());
console.log(programer.getLastname());
console.log(programer.getAge());
console.log(programer.getLanguage());
