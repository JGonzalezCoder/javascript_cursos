// async function

async function f() {
	const a = await Promise.resolve("hello");
	return a;
}

f();
