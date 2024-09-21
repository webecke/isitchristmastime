import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context

  try {
    return processRequest(request, (request) => {

      return new Response(
        JSON.stringify({ message: 'Hello Christmas! You did a [' + request.method + '] request and I love you' })
      )
    })
  } catch (error) {
    console.error('There was an error on the test function', error)
    return new Response('Dang, an error: ' + error, { status: 500 })
  }
}