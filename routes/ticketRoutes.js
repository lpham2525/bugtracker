const router = require('express').Router()
const { Ticket } = require('../models')

// GET all tickets
router.get('/tickets/', (req, res) => {
  Ticket.findAll()
    .then(tickets => res.json(tickets))
    .catch(err => console.error(err))
})

// GET one ticket
router.get('/tickets/:id', (req, res) => {
  Ticket.findOne({ where: { id: req.params.id } })
    .then(ticket => res.json(ticket))
    .catch(err => console.error(err))
})

// POST one ticket
router.post('/tickets/', (req, res) => {
  Ticket.create(req.body)
    .then(ticket => res.json(ticket))
    .catch(err => console.error(err))
})

// UPDATE one ticket
router.put('/tickets/:id', (req, res) => {
  Ticket.update(req.body, { where: { id: req.params.id } })
    .then(ticket => res.json(ticket))
    .catch(err => console.error(err))
})

// DELETE one ticket
router.delete('/tickets/:id', (req, res) => {
  Ticket.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router
