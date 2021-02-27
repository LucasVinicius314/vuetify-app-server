import { Router } from 'express'
import { categoryRouter } from './category'

const router = Router()

router.use(categoryRouter)

export { router }
