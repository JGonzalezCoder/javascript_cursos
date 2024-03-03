const usuario = {
	nombre : "jesus",
	apellido : "gonzalez",
	edad : 23,
	direccion : {
		pais : "venezuela",
		ciudad : "ciudad guayana",
		calle : "queseras del medio",
	},
	amigos : ["naruto", "sakura", "sasuke"],
	vivo : true,
	saludar() {
		return "soy jesus";
	}
}

console.log(usuario.direccion);
console.log(usuario.amigos);
console.log(usuario.saludar());
