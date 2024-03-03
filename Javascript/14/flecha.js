const button = document.createElement("button");
button.innerText = "click"

button.addEventListener("click", () => {
	alert("diste click");
})

document.body.append(button);
