const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('heroku_fd10588392a82f1','bafbc53efdba3f','8b6c334a',{
        host : 'us-cdbr-east-02.cleardb.com',
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

