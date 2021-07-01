require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use('/assets', express.static(join(__dirname, 'assets')))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

require('./db')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000, () => console.log('listening on port ' + port)))
  .catch((err) => console.error(err))