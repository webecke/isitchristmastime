interface Env {
	KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async (context) => {
 	return new Response("You pinged the test worker function!");
}