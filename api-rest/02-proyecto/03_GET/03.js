const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=5&api_key=live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4";
/*const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites?limit=1&api_key=live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4";*/
const imagenes = document.querySelectorAll("img");
const button = document.querySelector("button");

const loadRandomMichis = async () => {
	const res = await fetch(API_URL_RANDOM);
	const data = await res.json();
	if(res.status){
		imagenes.forEach((imagen, i)=> {
			imagen.src = data[i].url;
		});
	} else {
		console.log("Hubo un error: "+res.status);
	}
}

loadRandomMichis();
button.addEventListener("click",() => {
	loadRandomMichis()
});
