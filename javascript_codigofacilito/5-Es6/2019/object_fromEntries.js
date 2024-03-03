// fromEntries

const memo = {
	name: "jesus",
	lastname: "gonzaelez",
	age: 24,
}

object.keys(memo); // retorna las propiedades
object.values(memo); // retorna los valores
object.entries(memo) // devuelve un arreglo de arreglos de llave - valor;
objectfromEntries(object.entries(memo)); // retorna un objecto.
