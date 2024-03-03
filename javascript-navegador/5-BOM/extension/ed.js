const ocultar = (e) => {
	const element = e.target;
	element.style.display = "none";
	document.body.style.overflow = "auto";
}

const add_border = (e) => {
	const element = e.target;
	element.style.border = "2px solid green";
}

const remove_border = (e) => {
	const element = e.target;
	element.style.border = "";
}

document.body.addEventListener("click", ocultar);
document.body.addEventListener("mouseover", add_border);
document.body.addEventListener("mouseout", remove_border);
