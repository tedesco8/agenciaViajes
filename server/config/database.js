const Sequelize = require('sequelize');
require('dotenv').config({ path: '.env'});


module.exports = new Sequelize(process.env.DB, process.env.USR_DB, process.env.PWD_DB, {
    host: process.env.HS,
    port: process.env.PORT,
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
