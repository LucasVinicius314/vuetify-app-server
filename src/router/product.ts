import { Models } from '../connection'
import { Router } from 'express'

const router = Router()

router.post('/api/product/create', async (req, res) => {
  Models.Product.create({
    name: req.body.name,
    year: req.body.year,
    price: req.body.price,
    categoryId: req.body.categoryId,
    brandId: req.body.brandId,
  })
    .then(() => {
      res.status(201).json({ message: 'Product created' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/product/all', async (req, res) => {
  const rows = await Models.Product.findAll()
  res.status(200).json(rows)
})

router.post('/api/product/update/:id', async (req, res) => {
  Models.Product.update({
    name: req.body.name,
    year: req.body.year,
    price: req.body.price,
    categoryId: req.body.categoryId,
    brandId: req.body.brandId,
  }, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Product updated' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/product/delete/:id', async (req, res) => {
  Models.Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Product deleted' })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({ message: 'Error' })
    })
})

export { router as productRouter }
