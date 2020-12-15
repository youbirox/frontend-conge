const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Historique = require('../models/Historique');


const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY= 'secret'
//User.hasMany(Historique, {foreignKey: 'userId'})

//Register
users.post('/register',(req,res)=>{
    const today = new Date()
    
    const userData = {
        first_name : req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        date_recrutement:req.body.date_recrutement,
        created: today
    }

    User.findOne({
        where: {
            email:req.body.email
        }
    })
        .then(user => {
            if(!user){
                const hash =bcrypt.hashSync(userData.password,10)
                userData.password=hash
                User.create(userData)
                .then(user=>{
                    let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,
                       {
                        expiresIn: 1440
                        })
                        User.findAll()
                        //res.json(User)
                        res.json({ 
                            User:User,
                            token : token
                                    })
                })
                
                .catch(err=>{
                    res.send('error : '+error)
                })
            }else{
                res.json({error:'User already exists'})
            }
        })
        .catch(err=>{
            res.send('error : '+error)
        })
})

// Login
users.post('/login',(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if (bcrypt.compareSync(req.body.password,user.password)) {
            let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                expiresIn : 9000

            })
            res.json({token:token})
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+ err)
    })
})

// Profile
users.get('/profile',(req,res)=>{
    var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    
    User.findOne({
        where:{
            id:decoded.id
        }
    })
    .then(user=>{
        if (user) {
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    }) 
    .catch(err=>{
        res.send('error : '+err)
    })
})

// userss
users.get('/AllUsers',(req,res)=>{
   // var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    
    User.findAll({
      /*  where:{
            id:decoded.id
        }*/
    })
    .then(user=>{
        if (user) {
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


///Delete 

users.get('/delete/:id',(req,res)=>{

    User.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(user=>{
        if (user) {
            res.json(user)
        }else{
            res.send('User does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
   
}) 

users.get('/user/:id',(req,res)=>{

    User.findOne({
        where:{
            id:req.params.id
        }

    }).then(user=>{
        if (user) {
            res.json(user)
        }else
        {
            res.send('user does not exist')
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

/// Update status of USER
users.put('/update/:id',(req,res)=>
{
    User.update(
        { first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            type:req.body.type,
            date_recrutement:req.body.date_recrutement},
        {where: { id:req.params.id }
})

    .then(()=>{
        res.json({status:'USER update'})
    })
})

module.exports= users