const API_URL_RANDOM = `https://api.thecatapi.com/v1/images/search?limit=4`;
const API_URL_FAVOURITES = "https://api.thecatapi.com/v1/favourites";
const API_URL_UPLOAD = "https://api.thecatapi.com/v1/images/upload";
const API_URL_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;
const imagenes_random = document.querySelectorAll(".img--random");
const boton_recargar = document.querySelector(".button");
const botones_guardar = document.querySelectorAll(".button--save");
const boton_subir = document.querySelector(".button--form");
let ids = [];

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
	const res = await fetch(API_URL_FAVOURITES, {
		method: "GET",
		headers: {
		"X-API-KEY": "live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4",
		},
	});
	const data = await res.json();
	if(res.status === 200){
		const section = document.querySelector("#favoritesMichis");
		section.innerHTML = "";
		data.forEach((michi,i) => { 
			const article = document.createElement("article");
			const img = document.createElement("img");
			const btn = document.createElement("button");
			const text = document.createTextNode("Sacar al michi de favoritos");
			article.className = "container--figure";
			img.className = "img--favorite";
			btn.className = "button--delete";
			btn.appendChild(text);
			img.src = michi.image.url;
			article.appendChild(img);
			article.appendChild(btn);
			section.appendChild(article);
			btn.addEventListener("click", () => {
				deleteFavouriteMichi(michi.id);
			})
		})
	} else {
		console.log("Hubo un error: "+res.status+data.message);
	}
}

const saveFavouriteMichi = async (id) => {
	const res = await fetch(API_URL_FAVOURITES, {
		method: "POST",
		headers: {
			"X-API-KEY": "live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4",
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			image_id: id,
		}),
	});
	const data = await res.json();
	if(res.status === 200) {
		loadFavouritesMichis();
		console.log("Michi guadado en favoritos");
	}else{
		console.log("Hubo un error: "+res.status+data.message);
	}
}

const deleteFavouriteMichi = async (id) => {
	const res = await fetch(API_URL_DELETE(id), {
		method: "DELETE",
		headers: {
			"X-API-KEY": "live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4",
		}
	});
	const data = await res.json();
	if(res.status === 200) {
		loadFavouritesMichis();
		console.log("Michi eliminado de favoritos");
	}else{
		console.log("Hubo un error: "+res.status+data.message);
	}
}

const uploadMichi = async () => {
	const form = document.querySelector(".formMichis");
	const formData = new FormData(form);
	const res = await fetch(API_URL_UPLOAD, {
		method: "POST",
		headers: {
			"X-API-KEY": "live_OC778qVXgekTbj9d31QstcT35NPkIYltYKPN8304vgy4Vfhq2eb7H63SLCcOYTk4",
		},
		body: formData,
	});
	const data = await res.json();
	if(res.status === 201) {
		saveFavouriteMichi(data.id);
		console.log("Foto de michi subida :)");
	}else{
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

boton_subir.addEventListener("click", () => {
	uploadMichi();
});
