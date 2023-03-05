import { Hono } from 'hono'
import { bcryptHash, bcryptVerify } from './brcrypt-wasm'

const router = new Hono()

router.all('/hash', async (c) => {
  const hash = await bcryptHash(
    'hello-worla12312312asdasdjalifhjasnd,mbgkhasdjklafgkaskldnajkghlkasndbhjkajfhaøsdjnjkashdhakbfd',
  )
  return c.text(hash)
})

router.all('/compare', async (c) => {
  const hash = await bcryptVerify('hello-world', 'hello')
  return c.text(`success: ${hash}`)
})
export default router
