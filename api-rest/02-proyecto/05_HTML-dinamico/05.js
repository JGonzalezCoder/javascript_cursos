const NUM_IMG = 4;
const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=${NUM_IMG}&api_key=live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4`;
const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites?api_key=live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4";
const imagenes_random = document.querySelectorAll(".img--random");
const boton_recargar = document.querySelector(".button");
const botones_guardar = document.querySelectorAll(".button--save");
let ids = new Array(NUM_IMG);

const loadRandomMichis = async () => {
	const res = await fetch(API_URL_RANDOM);
	const data = await res.json();
	if(res.status === 200){
		imagenes_random.forEach((imagen_random, i) => {
			imagen_random.src = data[i].url;
			ids[i] = data[i].id;
		});
	} else {
		console.log("Hubo un error: "+res.status+data.message);
	}
}

const loadFavouritesMichis = async () => {
	const res = await fetch(API_URL_FAVOURITES);
	const data = await res.json();
	if(res.status === 200){
		data.forEach(michi => { 
			const section = document.querySelector("#favoritesMichis");
			const article = document.createElement("article");
			const img = document.createElement("img");
			const btn = document.createElement("button");
			const text = document.createTextNode("Sacar al michi de favoritos");
			article.className = "container--figure";
			img.className = "img--favorite";
			btn.className = "button";
			btn.appendChild(text);
			img.src = michi.image.url;
			article.appendChild(img);
			article.appendChild(btn);
			section.appendChild(article);
		})
	} else {
		console.log("Hubo un error: "+res.status+data.message);
	}
}

const saveFavouriteMichi = async (id) => {
	const res = await fetch(API_URL_FAVOURITES, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image_id: id,
		}),
	});
	const data = await res.json();
	if(res.status !== 200) {
		console.log("Hubo un error: "+res.status+data.message);
	}
}

loadRandomMichis();
loadFavouritesMichis();
boton_recargar.addEventListener("click", () => {
	loadRandomMichis();
});

botones_guardar.forEach((boton_guardar,i) => {
	boton_guardar.addEventListener("click",() => {
		saveFavouriteMichi(ids[i]);
	});
});

