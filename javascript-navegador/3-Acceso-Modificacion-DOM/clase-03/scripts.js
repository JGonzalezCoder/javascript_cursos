const poster = document.getElementById("poster");
const file = poster.src;
const blur = document.querySelector("#blur");
blur.style.backgroundImage = `url(${file})`;

const flecha = document.getElementById("flecha");
const menu = document.getElementById("mainMenu");;

const click = () => {
	menu.classList.toggle("hide");
}

flecha.addEventListener("click", click);
