import { Router } from 'express'
import { brandRouter } from './brand'
import { categoryRouter } from './category'
import { productRouter } from './product'
import { stockRouter } from './stock'

const router = Router()

router.use(categoryRouter)
router.use(brandRouter)
router.use(productRouter)
router.use(stockRouter)

export { router }
