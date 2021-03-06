const router = require('express').Router()
const { User, Ticket } = require('../models')

// Register a new user, throwing an error if it exists already
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(409).send('User already exists')
      } else {
        res.status(500).send('Something went wrong with the server...')
      }
      console.error(err)
    })
})

//GET one user
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Ticket] })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// UPDATE one user
router.put('/users/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// DELETE one user
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Log in user
router.get('/login/:name', (req, res) => {
  User.findOne({ where: { name: req.params.name } })
    .then(user => res.json(user))  
    .catch(err => console.error(err))
})

module.exports = router
