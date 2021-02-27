import { Models } from '../connection'
import { Router } from 'express'

const router = Router()

router.post('/api/stock/create', async (req, res) => {
  Models.Stock.create({
    quantity: req.body.quantity,
    productId: req.body.productId,
  })
    .then(() => {
      res.status(201).json({ message: 'Stock created' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/stock/all', async (req, res) => {
  const rows = await Models.Stock.findAll()
  res.status(200).json(rows)
})

router.post('/api/stock/update/:id', async (req, res) => {
  Models.Stock.update({
    quantity: req.body.quantity,
    productId: req.body.productId,
  }, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Stock updated' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/stock/delete/:id', async (req, res) => {
  Models.Stock.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Stock deleted' })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({ message: 'Error' })
    })
})

export { router as stockRouter }
