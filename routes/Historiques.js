const express=require('express')
const cors = require('cors')
const historiques = express.Router()
const nodemailer = require("nodemailer");
const Sequelize = require('sequelize')
const Historique = require('../models/Historique');
const Conge = require('../models/Conge')
const User = require('../models/User')
historiques.use(cors())

const Op=Sequelize.Op
process.env.SECRET_KEY= 'secret'


/// Add Historique
historiques.post('/AddHistorique',(req,res)=>{

    const historiqueData =  {
        userId:req.body.userId,
        congeId:req.body.congeId,
        commentaire:req.body.commentaire,
        user_name:req.body.user_name,
        EtatHistory:req.body.EtatHistory,
        date_creation:new Date()
                        }

    Historique.create(historiqueData).then(
        historique=>
        {
            if(historique){
                res.json(historique)
            }else{
                res.send('Historique not exist')
            }
        }
    ).catch(err=>{
        res.send('error : '+err)
    })

})




//Historique.hasMany(Conge, {foreignKey: 'congeId'})
//Conge.belongsTo(Historique, {foreignKey: 'HistoriqueId'})
//// Find All Historique
historiques.get('/getHistorique/:id',(req,res)=>{

    Historique.findAll({

        where:
        {
            congeId:req.params.id
        }

    }).then(
        history=>{
            if (history) {
                res.json(history)
            }else
            {
                res.send('Not Exist')
            }
        }
    )
})


//Historique.hasMany(User, {foreignKey: 'userId'})

//// Find All Historique
historiques.get('/getHistoriqueConge/:id',(req,res)=>{

    Historique.findAll({

        where:
        {
            congeId:req.params.id
        },
        include:[{
            model: User
        }]

    }).then(
        history=>{
            if (history) {
                res.json(history)
            }else
            {
                res.send('Not Exist')
            }
        }
    )
})
module.exports= historiques