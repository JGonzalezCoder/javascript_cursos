const API_URL = "https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4";
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
