import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context

  try {
    return processRequest(request, (request) => {
      return new Response(
        'I THINK IT WORKED!!!!' +
          '\n' +
          "here's some other info:\n" +
          'request URL: ' +
          request.url +
          '\nOrigin URL: ' +
          request.headers.get('Origin'),
        { status: 201 }
      )
    })
  } catch (error) {
    console.log('Dang, an error', +error)
    return new Response(
      'Dang, a super error: ' +
        error +
        '\n' +
        "here's some other info:\n" +
        'request URL: ' +
        request.url +
        '\nOrigin URL: ' +
        request.headers.get('Origin'),
      { status: 500 }
    )
  }
}
