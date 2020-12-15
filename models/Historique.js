const Sequelize = require('sequelize')
const db = require('../database/db.js');


module.exports = db.sequelize.define(
    'historique',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        commentaire: {
            type : Sequelize.STRING
        },
        user_name: {
            type : Sequelize.STRING
        },
        EtatHistory:{
            type : Sequelize.STRING
        },
        date_creation:{
            type: Sequelize.DATE,
            defaultValue:Sequelize.NOW
        },
        userId: {
            type: Sequelize.STRING
        },
        congeId: {
            type : Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
    
)

