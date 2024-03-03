//funciones puras:

/*
	Son funciones que reciben y devuelven valores
*/

function saludar(name) {
	return ("Hola soy " + name);
}

console.log(saludar("Jesus Gonzalez"));

//funciones de orden superior

/*
	Son funciones que reciben y devuleven otras funciones
*/

function descripcion(adjectivo) {
	return function(name) {
		return (name + " es " + adjectivo);
	}
}

let persona = descripcion("inteligente");
console.log(persona("Jesus"));

//funciones con datos inmutables

/*
	Son funciones con datos que no cambian
*/

var nombres = ["Jesus", "Jorge", "Julio"];

var nombres_nuevos = nombres.map(function (nombre) {
	if (nombre == "Julio") {
		return "Jose";
	}
	return nombre;
});

console.log(nombres);
console.log(nombres_nuevos);

//Librerias de javascript para la programacion funcional

/*
	1. Mori
	2. Imnmutable.js
	3. Underscore
	4. Lodash
	5. Ramda
*/
