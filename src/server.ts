import * as Express from 'express'
import * as cors from 'cors'
import * as dotenv from 'dotenv'

import { router } from './routes'
import { sequelize } from './connection'

dotenv.config()

const setup = async () => {
  await sequelize.authenticate()
    .then(() => console.log('auth ok'))
    .catch(console.log)

  await sequelize.sync({ alter: true })
    .then(() => console.log('sync ok'))
    .catch(console.log)

  const app = Express()

  app.use(cors())
  app.use(router)

  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
  })
}

setup()
