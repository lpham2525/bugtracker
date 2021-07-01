const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model { }
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { timestamps: false, sequelize, modelName: 'user' })

module.exports = User