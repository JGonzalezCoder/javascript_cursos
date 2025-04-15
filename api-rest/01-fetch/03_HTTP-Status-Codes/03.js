const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const imagenes = document.querySelectorAll("img");
const button = document.querySelector("button");

const fetchData = async () => {
	const res = await fetch(API_URL);
	const data = await res.json();
	imagenes.forEach((imagen, i)=> {
		imagen.src = data[i].url
	});
}

fetchData();
button.addEventListener("click",() => {fetchData()});
