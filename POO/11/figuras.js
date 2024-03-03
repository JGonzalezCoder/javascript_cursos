class Figuras {
	//constructor
	constructor(alt=0, anc=0) {
		//Atributos o propiedades
		let alto = alt;
		let ancho = anc;
		//SET/GET
		this.setAlto = function(alt) {
			alto = alt;
		}
		this.getAlto = function() {
			return alto;
		}
		this.setAncho = function(anc) {
			ancho = anc;
		}
		this.getAncho = function() {
			return ancho;
		}
		//Otros metodos
		this.imprimir = function() {
			console.log(`Alto:${this.getAlto()}  Ancho:${this.getAncho()}`);
		}
		this.area = function() {
			console.log("Area no definida");
		}
	}
}

class Triangulo extends Figuras {
	constructor(alt=0,anc=0) {
		super(alt,anc);
		this.area = function() {
			console.log(this.getAlto()*this.getAncho()/2);
		}
	}
}

class Rectangulo extends Figuras{
	constructor(alt=0,anc=0) {
		super(alt,anc);
		this.area = function() {
			console.log(this.getAlto()*this.getAncho());
		}
	}
}

//Uso del cotructor sin parametros
const obj1 = new Figuras();
obj1.setAlto(5);
obj1.setAncho(4);
obj1.imprimir();
//Uso del constructor con parametros
const obj2 = new Figuras(8,6);
obj2.imprimir();
//Uso de herencia
objT = new Triangulo(4,8);
objR = new Rectangulo(2,5);
objT.imprimir();
objR.imprimir();
//Polimorfismo por seleccion dinamica de metodos
let f;
f = objT;
f.area();
f = objR;
f.area();
//Polimorfismo usando arreglos
let arreglof = []
arreglof[0] = new Triangulo(4,8);
arreglof[1] = new Rectangulo(2,5);
arreglof.forEach( figura => {figura.area()});
