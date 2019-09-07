const Sequelize = require('sequelize');


module.exports = new Sequelize('agenciadeviajes', 'tedescodev', '0235pp', {
    host: '82.194.90.10',
    port: '3306',
    dialect: 'mysql', 
    define:{
    timestimps: false
   },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   },
    operatorAliases: false
 })
