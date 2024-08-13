interface Env {
	KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
	const value = await context.env.KV.get('example');
 	return new Response("You pinged the test worker function!");
}