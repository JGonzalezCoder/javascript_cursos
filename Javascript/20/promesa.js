const ul = document.createElement("ul");

/*
let dato = fetch("https://jsonplaceholder.typicode.com/posts")
	.then(function (respuesta) {
		return respuesta.json();
	}).then(function (dato){
		console.log(dato);
		dato.forEach(function (post) {
			const li = document.createElement("li");
			li.innerText = post.title;
			ul.append(li);
		});
		document.body.append(ul);
	})
*/

async function cargar() {
	const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
	const dato = await respuesta.json();
	console.log(dato);
	dato.forEach(function (post) {
		const li = document.createElement("li");
		li.innerText = post.title;
		ul.append(li);
	});
	document.body.append(ul);
}

cargar();
