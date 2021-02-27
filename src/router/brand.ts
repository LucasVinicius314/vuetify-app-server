import { Models } from '../connection'
import { Router } from 'express'

const router = Router()

router.post('/api/brand/create', async (req, res) => {
  Models.Brand.create({
    name: req.body.name,
  })
    .then(() => {
      res.status(201).json({ message: 'Brand created' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/brand/all', async (req, res) => {
  const rows = await Models.Brand.findAll()
  res.status(200).json(rows)
})

router.post('/api/brand/update/:id', async (req, res) => {
  Models.Brand.update({
    name: req.body.name,
  }, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Brand updated' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/brand/delete/:id', async (req, res) => {
  Models.Brand.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Brand deleted' })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({ message: 'Error' })
    })
})

export { router as brandRouter }
