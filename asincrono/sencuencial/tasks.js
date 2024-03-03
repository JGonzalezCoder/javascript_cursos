import util from "util";
const sleep = util.promisify(setTimeout);


export const taskOne = async () => {
	try {
		await sleep(4000);
		return "ONE VALUE";
	} catch(e) {
		console.log(e);
	}
}
	
export const taskTwo = async () => {
	try {
		await sleep(2000);
		return "TWO VALUE";
	} catch(e) {
		console.log(e);
	}
}
