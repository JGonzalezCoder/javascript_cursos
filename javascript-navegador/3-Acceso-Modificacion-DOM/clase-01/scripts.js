function saludar(){
	const arts = document.getElementById("arts");
	const p = document.createElement("p");
	p.innerText = "Este parrafo se hizo al hacer click";
	arts.appendChild(p);
}
