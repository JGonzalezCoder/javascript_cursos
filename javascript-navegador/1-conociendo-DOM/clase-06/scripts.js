console.log(document.body.innerHTML);
console.log(document.body.innerText);

const children = document.body.children;

children[0].innerText = "Hola mundo =D";

const animation = () => {
	if(document.body.style.backgroundColor==="skyblue") {
		document.body.style.backgroundColor = "tomato";
	} else {
		document.body.style.backgroundColor = "skyblue";
	}
}

setInterval(animation, 1000);
