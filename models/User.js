const Sequelize = require('sequelize')
const db = require('../database/db.js')
const Conge = require('./Conge.js')

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type : Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue:Sequelize.NOW
        },
        date_recrutement: {
            type: Sequelize.STRING
        }  
    },
    {
        timestamps: false
    }
    
)

//x.hasMany(Conge,{as: "conges", foreignKey: 'userId'});