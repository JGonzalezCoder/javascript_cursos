const URL = "https://api.thecatapi.com/v1/images/search";
const img = document.querySelector("img");
const button = document.querySelector("button");

const fetchData = async () => {
	const res = await fetch(URL);
	const data = await res.json();
	img.src = data[0].url;
}

fetchData();
button.addEventListener("click",() => {fetchData()});
