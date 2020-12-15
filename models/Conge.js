const Sequelize = require('sequelize')
const db = require('../database/db.js');
const User = require('./User.js');

module.exports = db.sequelize.define(
    'conge',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date_debut: {
            type : Sequelize.STRING
        },
        date_fin: {
            type: Sequelize.STRING
        },
        Nbrjours: {
            type : Sequelize.STRING
        },
        commentaire: {
            type: Sequelize.STRING
        },
        Etat:{
            type:  Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue:Sequelize.NOW
        },
        userId: {
            type: Sequelize.STRING
           
        }
        
        
    },
    {
        timestamps: false
    }
    
)

