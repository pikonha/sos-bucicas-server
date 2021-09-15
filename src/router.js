import { Router } from 'express'


const router = new Router()

router.get("/", async (_, res) => {
  res.json({msg: "ok"})
})

export default router
