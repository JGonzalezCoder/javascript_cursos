const user = {
	// atributos o propiedades
	name : "jesus",
	lastname : "gonzalez",
	age : 23,
	hobbies : ["write", "read", "run"],
	address : {
		street : "Queseas del medio",
		city : "Ciudad Guayna"
	},
	// metodos
	fullName(){
		return (this.name + " " + this.lastname);
	}
}

const account= {
	// atributos o propiedades
	number : "1234567890987654321",
	amount : 100,
	// metodos
	deposit(quantity){
		this.amount = this.amount + quantity;
	},
	withdraw(quantity){
		this.amount = this.amount - quantity;
	}
}

console.log(user);
console.log(user.fullName());
account.deposit(47);
account.withdraw(23);
console.log(account);
