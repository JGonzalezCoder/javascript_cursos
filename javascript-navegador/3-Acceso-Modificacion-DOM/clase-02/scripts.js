const click = () => {
	const arts = document.getElementById("formulario");
	const p = document.createElement("p");
	p.innerText = "Este parrafo se hizo al hacer click";
	arts.appendChild(p);
}

const mouseOver = () => {
	const arts = document.getElementById("formulario");
	const p = document.createElement("p");
	p.innerText = "Este parrafo se hizo al hacer click";
	arts.appendChild(p);
	username.removeEventListener("mouseover", mouseOver);
}

const username = document.getElementById("username");

username.addEventListener("click", click);
username.addEventListener("mouseover", mouseOver);
