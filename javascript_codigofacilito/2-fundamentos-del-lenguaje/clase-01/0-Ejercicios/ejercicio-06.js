const wikipedia = 0.10;
const meme = 0.05;

let x = parseFloat(prompt("consumo de megas en wikipedia"));
let y = parseFloat(prompt("consumo de megas en memes"));

total = (x * wikipedia) + (y * meme);

if (total > 100){
	console.log("consumo demasiado alto");
}

if (y > x) {
	console.log("wow, muchos memes");
}
