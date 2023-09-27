const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_complete', 'root', '712123@daS', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
