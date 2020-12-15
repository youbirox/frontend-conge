const express=require('express')
const cors = require('cors')
const conges = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer");
const Sequelize = require('sequelize')
const Conge = require('../models/Conge')
const User = require('../models/User')
const { Model } = require('sequelize')
const Historique = require('../models/Historique')
conges.use(cors())

const Op=Sequelize.Op
process.env.SECRET_KEY= 'secret'

/*Conge.create({
    date_debut : '1',
    date_fin : '1',
    Nbrjours :'1',
    commentaire : 'ds',
    Etat : 'd',
    type : 'ze',
    created : '02',
    userId : 1

})*/
//Register
conges.post('/addconge',(req,res)=>{
    const today = new Date()
    const DF = 'En attente'
    const congeData = {
        date_debut : req.body.date_debut,
        date_fin: req.body.date_fin,
        commentaire: req.body.commentaire,
        Nbrjours: req.body.Nbrjours,
        Etat: DF,
        type: req.body.type,
        created: today,
        userId: req.body.userId,
        historiqueId: req.body.historiqueId
    }

        
     Conge.create(congeData)
     .then(conge=>{
        // async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "s471.adk-media.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "conge@artex-business.com", // generated ethereal user
        pass: "AblFLv#0[Q}.", // generated ethereal password
        tls: {
            rejectUnauthorized:false
        }
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"GESTION DE CONGE" <conge@artex-business.com>', // sender address
      to: "l.mazouz@artex-business.com", // list of receivers
      cc:"a.moutii@artex-business.com,m.sobhi@artex-business.com,a.halioua@artex-business.com",
      subject: "Demande de congé", // Subject line
      text: "Un salarié a demandé un congé , merci de se référer à l’application GESTION DE CONGE ", // plain text body
      html: "Un salarié a demandé un congé , merci de se référer à l’application GESTION DE CONGE ", // html body
    });
  
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);

            res.json({ 
                Conge:Conge,
                
                        })
    })
    
    .catch(err=>{
        res.send('error : '+error)
    })
    // res.send('conge add')
               
        
        
})
User.hasMany(Conge, {foreignKey: 'userId'})
Conge.belongsTo(User, {foreignKey: 'userId'})

Conge.hasMany(Historique, {foreignKey: 'congeId'})
//Historique.belongsTo(Conge, {foreignKey: 'congeId'})

//Historique.hasMany(Conge, {foreignKey: 'historiqueId'})
//All Congé par id 

conges.get('/allconge/:id',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        where:{
            userId:req.params.id,
            Etat:'En attente'
        },
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})
//All Congé non validé

conges.get('/ttconge/',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        where:{
            Etat:'En attente'
        },
        include: [{
            model: User
           }],
           order: [
               ['id', 'DESC'],
           ]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

///// Congé réfusé par id
//All Congé par id 

conges.get('/allcongeRefus/:id',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        where:{
            userId:req.params.id,
            Etat:'Réfus'
        },
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


///// Congé réfusé 
//All Congé réfusé

conges.get('/allcongeRefuss/',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        where:{
            Etat:'Réfus'
        },
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

//All Congé Validé BETWEEN 2 DATE

conges.get('/congeBetween/:date_debut/:date_fin',(req,res)=>{
    
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        attributes: [
            [  
                 Sequelize.col('User.id'), 'id'
            ],
            [  
                Sequelize.col('User.first_name'), 'first_name'
           ]
           ,'id','date_debut','date_fin','Nbrjours','commentaire','Etat','type','created'
        ],
        where:{
            date_debut:{
                [Op.gte]:req.params.date_debut
            },
            date_fin:{
                [Op.lte]:req.params.date_fin
            },
            Etat:'Validé'
        },
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


//All Congé Validé

conges.get('/ttcongev/',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        attributes: [
            [  
                 Sequelize.col('User.id'), 'id'
            ],
            [  
                Sequelize.col('User.first_name'), 'first_name'
           ]
           ,'id','date_debut','date_fin','Nbrjours','commentaire','Etat','type','created'
        ],
        where:{
            Etat:'Validé'
        },
        include: [{
            model: User
           }],
           order: [
               ['date_debut', 'DESC'],
           ]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})
///// Conge Validé
conges.get('/conge_valide/:id',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.findAll({
        where:{
            userId:req.params.id,
            Etat:'Validé'
        },
        include: [{
            model: User
           },
           {
            model: Historique
           }],
           order: [
               ['date_debut', 'DESC'],
           ]
           
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


//Count Conge valider

conges.get('/count/:id',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.count({
        where:{
            userId:req.params.id,
            Etat:'Validé'
        }
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

//Count Conge en attente

conges.get('/countAttente/:id',(req,res)=>{
    //var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    Conge.count({
        where:{
            userId:req.params.id,
            Etat:'En attente'
        }
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


///Conge by Name

conges.get('/congeByName/:nom',(req,res)=>{
     
     //console.log(FR)
    Conge.findOne({
        attributes: [
               [
                Sequelize.fn('sum', Sequelize.col('Nbrjours')), 'SUM'
            ],
            [  
                 Sequelize.col('User.first_name'), 'first_name'
            ],
            'Nbrjours'
        ],
        group: ['userId'],
        where:
        {
            //userId:req.params.nom,
            Etat:'Validé'
        },
        where:Sequelize.where( Sequelize.col('first_name'), req.params.nom),
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})
//SUM CONGE

conges.get('/sum/:id',(req,res)=>{
    
    Conge.sum('Nbrjours',{
        where:{
            userId:req.params.id,
            Etat:'Validé'
        }
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

//SUM CONGE

conges.get('/sumAll/',(req,res)=>{
    
    Conge.findAll({
        attributes: [
            [
                Sequelize.fn('sum', Sequelize.col('Nbrjours')), 'SUM'
            ],
            [  
                 Sequelize.col('User.first_name'), 'first_name'
            ],
            'Nbrjours'
        ],
        group: ['userId'],
        where:{
            Etat:'Validé'
        },
        include: [{
            model: User
           }]
    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


conges.get('/conge/:id',(req,res)=>{

    Conge.findOne({
        where:{
            id:req.params.id
        },
        include:[{
            model: Historique
        }],
        order: [
            [Sequelize.col('historiques.id'),'DESC'],
        ]

    }).then(conge=>{
        if (conge) {
            res.json(conge)
        }else
        {
            res.send('Conge does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


/// Update status of congé
conges.put('/update/:id',(req,res)=>
{
    Conge.update(
        { Etat:req.body.Etat,
        type:req.body.type,
        Nbrjours:req.body.Nbrjours,
        commentaire:req.body.commentaire,
        date_debut:req.body.date_debut,
        date_fin:req.body.date_fin},
        {where: { id:req.params.id }
})

    .then(()=>{
        res.json({status:'Congé update'})
    })
})

/// Update status of congé
conges.put('/updateDirect/:id',(req,res)=>
{
    Conge.update(
        { Etat:'Validé'},
        {where: { id:req.params.id }
})

    .then(()=>{
        res.json({status:'Congé update'})
    })
})


/// Refus status of congé
conges.put('/refuseDirect/:id',(req,res)=>
{
    Conge.update(
        { Etat:'Réfus'},
        {where: { id:req.params.id }
})

    .then(()=>{
        res.json({status:'Congé update'})
    })
})


/// Delete status of congé
conges.get('/delete/:id',(req,res)=>
{
    Conge.destroy({
        where:{
            id: req.params.id
        }
    }).then(Conge=>{
        if (Conge) {
            res.json(Conge)
        }else{
            res.send('Conge does not exist')
        }
    })
})


module.exports= conges