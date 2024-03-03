// Error.cause

try {

} catch(error) {
	throw new Error("esto es un error", {cause: error});
}
