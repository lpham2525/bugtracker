const User = require('./User.js')
const Ticket = require('./Ticket.js')

User.hasMany(Ticket)
Ticket.belongsTo(User)

module.exports = { User, Ticket }