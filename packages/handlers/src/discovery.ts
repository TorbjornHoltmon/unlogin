import { Context } from 'hono'

export async function discoveryHandler(honoContext: Context) {
  return honoContext.text('OpenId Discovery endpoint')
}
