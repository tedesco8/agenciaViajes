const Sequelize = require('sequelize');

module.exports = new Sequelize('agenciadeviajes', 'root', 'xxx8090235', {
    host: '127.0.0.1',
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