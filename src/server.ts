import * as bodyParser from 'body-parser'
import * as colors from 'colors'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as express from 'express'

import { router } from './router'
import { sequelize } from './connection'

dotenv.config()

const setup = async () => {
  await sequelize.authenticate()
    .then(() => console.log(colors.green('Database authentication ok')))
    .catch((error) => {
      console.log(colors.red('Database authentication error'))
      console.log(error)
    })

  await sequelize.sync({ alter: true })
    .then(() => console.log(colors.green('Database synchronization ok')))
    .catch((error) => {
      console.log(colors.red('Database synchronization error'))
      console.log(error)
    })

  const app = express()

  app.use(cors())
  app.use(bodyParser.json())
  app.use(router)

  app.listen(process.env.PORT, () => {
    console.log(colors.green('Ready'))
    console.log(colors.blue(`The server is listening on port ${process.env.PORT}`))
  })
}

setup()
