const TIME = 5000; //milisegundos

const show = () => {
	const modal = document.createElement("div");
	modal.classList.add("show");
	modal.innerHTML = "<h2>VUELVE AL TRABAJO</h2><span>Termino tu tiempo</span>"
	document.body.appendChild(modal);
}

setTimeout(show, TIME);
