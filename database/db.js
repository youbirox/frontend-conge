const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('gestion_gonge','root','',{
        host : '192.168.1.41',
        dialect : 'mysql',
        operatorsAliases:false,


        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

