console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);

console.log(window.location.reload());
console.log(window.location.replace("https://google.com"));
window.alert("Hola mundo =D");
const name = window.prompt("Ingresa tu edad");
console.log(name);
if(window.confirm("Se eliminara tu perfil?")){
	window.alert("perfil eliminado");
} else {
	window.alert("Gracias por quedarte");
}

const saludar = () => {
	alert("Hola");
}

window.setTimeout(saludar,4000);

const hola = () => {
	console.log("Hola =D");
}

const intervalo = window.setInterval(hola, 2000);
window.clearInterval(intervalo);
window.screen;

const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
let ventana;
abrir.addEventListener("click", () => {
	ventana = window.open("https://ed.team", "_blank", "height=300px, width=400px");
})
cerrar.addEventListener("click", () => {
	ventana.close();
})

window.history.back();
window.history.forward();
