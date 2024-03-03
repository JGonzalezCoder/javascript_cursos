let numeroMagico = parseInt(Math.random()*100);
let numero;
for(;;) {
	numero = Number(prompt("adivina el numero"));
	if (numero === NaN) {
		cosole.log("Error. Solo puedes ingresar numeros");
	} else if (numero < 0 && numero > 100) {
		cosole.log("Tu opcion esta fuera del rango 0-100");
	} else if(numero < numeroMagico) {
		cosole.log("el numero es mayor");
	} else if(numero > numeroMagico) {
		cosole.log("el numero es menor");
	} else if(numero === numeroMagico) {
		cosole.log("Felicidades, adivinaste el numero");
		break
	}
}
