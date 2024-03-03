const title = document.createElement("h1");
title.innerText = "DOM";

const button = document.createElement("button");
button.innerText = "click";

button.addEventListener("click", function () {
	title.innerText = "texto actualizado";
	alert("se hizo un click");
});

document.body.append(title);
document.body.append(button);
