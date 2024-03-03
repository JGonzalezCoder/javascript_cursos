class Animal{
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

class Person{
	constructor (name, lastname, date={}){
		this.name = name
		this.lastname = lastname
		//composicion - inicio
		this.date = {
			day : date.day,
			month : date.month,
			year : date.year
		}
		//composicion - fin
	}
}

const date = {
	day : 7,
	month : 10,
	year : 1999
}

const person1 = new Person("jesus", "gonzalez",date);
const person2 = new Person("julio", "gonzalez", date);
const dog = new Animal("yoyo",2);
person2.son = person1; // asociacion
person1.pet = dog; //agreacion
console.log(person1);
console.log(person2);
console.log(dog);
