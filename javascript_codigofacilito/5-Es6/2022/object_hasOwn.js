// Object.hasOwn

class Human {
	#age = 31
	name = "jesus";
}

const human = new Human();

Object.hasOwn(human,"name"); //true
Object.hasOwn(human, "toString") //flase
