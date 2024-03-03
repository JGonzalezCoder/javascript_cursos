// class static methods

class human {
	static isHuma = true;
	constructor(name) {
		this.name = name;
	}
	
	showNanme() {
		return this.name;
	}
	
	static sayHuma() {
		return "Es human";
	}
}

const person_01 = new Human("jesus");
person_01.showName();
const person_02 = new Human("julio");
person_02.showName();
const person_03 = new Human("jorge");
person_03.showName();

Human.sayHuman();
