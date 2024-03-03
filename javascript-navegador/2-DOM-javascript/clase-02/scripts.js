/* Crear elementos */
const div = document.getElementsByClassName("articulos");
const arraydiv = [...div]; 
const item = document.createElement("article");
const h2 = document.createElement("h2");
const p = document.createElement("p");
item.id = "article-04";
item.classList.add("article");
h2.innerText = "Título del artículo 4";
const nodeP = document.createTextNode("Descripción del artículo 4");

/* Crear hijos a elementos */
p.appendChild(nodeP);
item.appendChild(h2);
item.appendChild(p);
arraydiv[0].appendChild(item);

/* Eliminar elementos */
arraydiv[0].removeChild(item);

/* Devolver el primer hijo (elemento) de un elemento */
console.log(p.firstElementChild);

/* Devuelve el primer hijo (nodo) de un elemento */
console.log(p.firstChild);

/* permite setear atributos a una etiqueta*/
item.setAttribute("arial-label", "cuarto-articulo");
console.log(item);
