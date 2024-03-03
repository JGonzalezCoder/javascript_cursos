const fondo = "yellow";
const color = "blue";
const estaAutorizado = true;

const button = document.createElement("button");
button.innerText = "click"
button.style = `background : ${estaAutorizado? fondo : "green"}; color : ${color}`;

button.addEventListener("click", () => {
	alert("diste click");
})

document.body.append(button);
