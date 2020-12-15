var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var app=express()
var port=process.env.PORT || 3000
const nodemailer = require("nodemailer");

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({extended:false})
)


var Users = require('./routes/Users')
var Conges = require('./routes/Conges')
var Historiques = require('./routes/Historiques')

app.use("/users",Users)
app.use("/conges",Conges)
app.use("/historiques",Historiques)



app.listen(port,function(){
    console.log('Server is running on port '+ port)
})