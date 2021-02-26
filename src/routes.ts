import { Models, sequelize } from './connection'

import { Router } from 'express'

const router = Router()

router.get('/api/category/all', async (req, res) => {
  const rows = await Models.Category.findAll()
  res.status(200).json(rows)
})

router.get('/api/category/create/:name', async (req, res) => {
  Models.Category.create({
    name: req.params.name,
  })
    .then(() => {
      res.status(200).json({ message: 'Object created' })
    })
    .catch(() => {
      res.status(400).json({ message: 'Error' })
    })
})

export { router }
