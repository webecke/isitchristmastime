import { processRequest } from './processRequest'

interface Env {
  KV: KVNamespace
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context

  return processRequest(request, (request) => {
    return new Response('I THINK IT WORKED!!!!', { status: 201 })
  })
}
