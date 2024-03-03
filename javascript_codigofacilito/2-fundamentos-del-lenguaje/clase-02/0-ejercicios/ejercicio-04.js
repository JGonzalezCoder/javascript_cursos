const GANANCIA = 10;
const MEMBRESIA = 13;

const pago = (horas) => {
	return horas * GANANCIA;
}

const meses = (monto) => {
	return parseInt(monto / MEMBRESIA);
}

meses(dinero(30));
