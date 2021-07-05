const router = require('express').Router()
const { User, Ticket } = require('../models')

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/dashboard/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Ticket] })
    .then(user => {
      res.render('dashboard', { user: user.dataValues })
    })
    .catch(err => console.error(err))
})

module.exports = router