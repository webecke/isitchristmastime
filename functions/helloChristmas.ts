import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context

    return processRequest(request, (request) => {

      return new Response(
        JSON.stringify({ message: 'Hello Christmas! You did a [' + request.method + '] request and I love you very much' })
      )
    })
}