const usuario = {
	nombre : "jesus",
	edad : 23
}

function informacion({nombre, edad}) {
	return ("<h1>Soy " + nombre + " tengo " + edad + "</h1>");
}

document.body.innerHTML = informacion(usuario);
