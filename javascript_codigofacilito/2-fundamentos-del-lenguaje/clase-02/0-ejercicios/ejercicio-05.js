function reemplazar(mensaje, codigo="x") {
	for(let letra of mensaje) {
		if(letra === "a") {
			letra = codigo;
		}
		console.log(letra);
	}
}
