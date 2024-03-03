const user = {
	name : "jesus",
	lastname : "gonzalez",
	age : 23,
	fullName() {
		return this.name;
	}
}

console.log(Object.keys(user));
console.log(Object.values(user));
