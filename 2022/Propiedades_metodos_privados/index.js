class User {
	firstname = "Jesus";
	age = 24;
	#lastname = "Gonzalez";
	
	#name() {
		return `${this.firstname} ${this.#lastname}`;
	}
	
	hello() {
		return `Hello, I'm ${this.#name()}`;
	}
}

const user = new User("jesus", 24);
console.log(user);
console.log(user.hello());
