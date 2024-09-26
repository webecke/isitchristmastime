import { processRequest } from './processRequest'
import { Env } from './env'

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context
  return processRequest(request, (request) => {

    return new Response(
      JSON.stringify({
        answer: 'YES',
        explanation: "because I said so gosh darn it!"
      })
    )

  }, "calculating if it is Christmastime or not")
}