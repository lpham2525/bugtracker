const Sequelize = require('sequelize')

// const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/bugtracker_db')

module.exports = sequelize