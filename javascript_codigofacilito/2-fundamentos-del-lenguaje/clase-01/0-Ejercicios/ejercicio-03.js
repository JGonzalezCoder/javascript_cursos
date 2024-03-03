let name = prompt("Dame tu nombre");
let cal_01 = parseInt(prompt("Dame la primera calificacion"));
let cal_02 = parseInt(prompt("Dame la segunda calificacion"));
let cal_03 = parseInt(prompt("Dame la tercera calificacion"));

let prom = (cal_01 + cal_02 + cal_03)/3;

console.log(`Hola ${name} tu promedio calculado es ${prom}`);
