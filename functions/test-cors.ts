import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context

  try {
    return processRequest(request, (request) => {
      return new Response(
        'Hello there. It appears you have successfully called the test function on the backend. Congrats!'
      )
    })
  } catch (error) {
    console.error('There was an error on the test function', error)
    return new Response('Dang, an error: ' + error, { status: 500 })
  }
}
