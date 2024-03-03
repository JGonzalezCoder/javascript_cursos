/* Obtener un elmento por su Id*/
const item_id = document.getElementById("article-03");
console.log(item_id);
/* Obtener un elemento por su clase*/
const item_class = document.getElementsByClassName("article");
const item_array_class = [...item_class]
console.log(item_class);
item_array_class.forEach(el => console.log(el));
/* Obtener un elemento por su etiqueta*/
const articles = document.getElementsByTagName("article");
console.log(articles);
/* Obtener un elemento por su atributo name */
const item_name = document.getElementsByName("article");
/* Obtiene un elmento por un selector de CSS*/
const item_query = document.querySelector(".article");
console.log(item_query);
/* Obtienes todos los elementos por un selector de CSS*/
const item_querys = document.querySelectorAll(".article");
console.log(item_querys);
