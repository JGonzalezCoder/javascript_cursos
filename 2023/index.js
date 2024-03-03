// findLast: Retorna un elemento del arreglo desde el utimo elemnto hasta primer elemento.

const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

let result = numbers.findLast((value,indice) => {
	console.log(`valor: ${value}, indice: ${indice}`);
	return value === 13;
});

console.log(result);

// findLastIndex: Retorna el index elemento del arreglo desde el utimo elemnto hasta primer elemento.

result = numbers.findLastIndex((value,indice) => {
	console.log(`valor: ${value}, indice: ${indice}`);
	return value === 13;
});

console.log(result);

// toReversed: Retorna un nuevo arreglo invertido.

result = numbers.toReversed();

console.log(result);

// toSorted: Retorna un nuevo arreglo ordenado.

result = numbers.toSorted((a,b) => b - a);

console.log(result);

// toSpliced: Retorna un nuevo arreglo con elementos eliminado e insertado.
// toSpliced(start, delete, ...)
// start: Indice donde se comenzara a cambiar el arreglo.
// delete: Indica el numero de elementos a eliminar del arreglo antiguo.
// ...: Los elementos que se agregaran al arreglo.
result = numbers.toSpliced(1, 2, 37, 41);

console.log(result);

// with: Retorna un nuevo arreglo con un valor modificado.

result = numbers.with(10, 113);

console.log(result);
