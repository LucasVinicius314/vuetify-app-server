import * as dotenv from 'dotenv'

import { DataTypes, Sequelize } from 'sequelize'

dotenv.config()

const host = process.env.MYSQL_HOST
const port = process.env.MYSQL_PORT
const db = process.env.MYSQL_DB
const user = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD

const sequelize = new Sequelize(`mysql://${host}:${port}/${db}`, {
  username: user,
  password: password,
})

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const Brand = sequelize.define('Brand', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
  brandId: {
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id',
    },
  },
})

const Stock = sequelize.define('Stock', {
  quantity: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
})

const Models = {
  Category,
  Brand,
  Product,
  Stock,
}

export { sequelize, Models }
