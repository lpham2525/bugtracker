require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(express.static(join(__dirname, 'public')))
app.use('/assets', express.static(join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .sync()
  // .then(() => app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000')))
  .then(() => app.listen(3000, () => console.log('http://localhost:3000')))
  .catch((err) => console.error(err))
  