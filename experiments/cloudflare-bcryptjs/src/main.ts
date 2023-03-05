import { Hono } from 'hono'
import { bcryptCompare, bcryptHash } from './bcrypt'

const router = new Hono()

router.all('/hash', async (c) => {
  const hash = await bcryptHash(
    'hello-worla12312312asdasdjalifhjasnd,mbgkhasdjklafgkaskldnajkghlkasndbhjkajfhaøsdjnjkashdhakbfd',
  )
  return c.text(hash)
})

router.all('/compare', async (c) => {
  const hash = await bcryptCompare()
  return c.text(`success: ${hash}`)
})

export default router
