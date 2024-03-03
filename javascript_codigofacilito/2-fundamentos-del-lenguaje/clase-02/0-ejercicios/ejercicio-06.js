function calculadora(number_01, number_02, operacion) {
	return operacion(number_01, number_02);
}

calculadora(3,5,(a,b) => a + b);
