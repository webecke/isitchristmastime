import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context
    return processRequest(request, (request) => {
      return new Response(
        'Hello there. It appears you have successfully called the test function on the backend. Congrats!'
      )
    })
}
