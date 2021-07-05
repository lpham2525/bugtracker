const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Ticket extends Model { }

Ticket.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  project: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { timestamps: false, sequelize, modelName: 'ticket' })

module.exports = Ticket
