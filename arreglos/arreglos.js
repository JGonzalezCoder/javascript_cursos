estudiantes = [
	{
		name : "Jesus",
		lastname : "Gonzalez",
		age : 23,
		course : "informatica",
	},
	{
		name : "Julio",
		lastname : "Gonzalez",
		age : 22,
		course : "derecho",
	},
	{
		name : "Jorge",
		lastname : "Gonzalez",
		age : 21,
		course : "contaduria",
	},
	{
		name : "Jose",
		lastname : "Gonzalez",
		age : 24,
		course : "administracion de empresas",
	},
	{
		name : "Juan",
		lastname : "Gonzalez",
		age : 25,
		course : "electricidad",
	}
];

//forEach : recorre un arreglo.

estudiantes.forEach(estudiante => {console.log(estudiante)});

// map: recorre y devuelve un arreglo.

var fullnames = estudiantes.map(estudiante => estudiante.name + " " + estudiante.lastname);

console.log(fullnames);

//filter: recorre y devuelve un arreglo que cumpla con una condicion.

var menores = estudiantes.filter(estudiante => estudiante.age <= 23);

console.log(menores);

//reduce: recorre y devuelve un acumulador.

var suma_edades = estudiantes.reduce((ages, estudiante) => ages + estudiante.age, 0);

console.log(suma_edades);

//sort: devuelve un arreglo ordenado.

var ordenado = estudiantes.sort((first, last) => first.age - last.age);

console.log(ordenado);

//find: devuelve un elemento que cumpla una condicion.

var item = estudiantes.find(estudiante => estudiante.name === "Juan");

console.log(item);

//some: devuelve verdadero o falso de una condicion

var existe = estudiantes.some(estudiante => estudiante.name === "Jesus");

console.log(existe);

//every: devuelve verdadero o falso si todos los elemento de un arreglo cumple con una condicion

var condicion = estudiantes.every(estudiante => estudiante.age === 20);

console.log(condicion);
