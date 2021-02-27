import { Models } from '../connection'
import { Router } from 'express'

const router = Router()

router.post('/api/category/create', async (req, res) => {
  Models.Category.create({
    name: req.params.name,
  })
    .then(() => {
      res.status(201).json({ message: 'Category created' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/category/all', async (req, res) => {
  const rows = await Models.Category.findAll()
  res.status(200).json(rows)
})


router.post('/api/category/update/:id', async (req, res) => {
  Models.Category.update({
    name: req.body.name,
  }, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Category updated' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

router.get('/api/category/delete/:id', async (req, res) => {
  Models.Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: 'Category deleted' })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({ message: 'Error' })
    })
})

export { router as categoryRouter }
