function hola(name){
	console.log("hola " + name);
}

function suma(n1 = 11, n2 = 13) {
	return (n1 + n2);
}

function hola_mundo() {
	return function () {
		return "hola mundo";
	}
}

console.log(hola_mundo()());
hola("Jesus");
console.log(suma(2,3));
console.log(suma(2));
console.log(suma());
