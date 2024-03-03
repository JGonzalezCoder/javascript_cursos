const names = ["jesus", "julio", "jorge"];
const apellidos = ["gonzalez", "acevedo", "solano"];

const nuevos = names.map(function(name) {
	return `Hola ${name}`;
});

console.log(names);
console.log(nuevos);

const item_1 = names.find(function(name) {
	if (name == "jesus") {
		return name;
	}
});

console.log(item_1);

const item_2 = names.filter(function(name) {
	if (name != "jesus") {
		return name;
	}
})

console.log(item_2);
console.log(names.concat(apellidos));
console.log([... names, ...apellidos]);
