let passwordDB = "pikachu";
let password = "pikachu777";
let puntaje = 70;
let tarjeta = "tarjeta de debito";

let resultado = passwordDB == password

if (resultado == true) {
	console.log("password correcto");
} else {
	console.log("password incorrecta");
}

if (puntaje > 30) {
	console.log("necesitas practicar mas");
} else if (puntaje) {
	console.log("estas mejorando");
} else {
	console.log("necesitas seguir este tutorial");
}

switch (tarjeta) {
	case "tarjeta de debito":
		console.log("esta es una tarjeta de debito");
		break;
	case "tarjeta de credito":
		console.log("esta es una tarjeta de credito");
		break;
	default:
		console.log("no tienes tarjeta");
}
