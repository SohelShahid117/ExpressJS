const users = require('./models/users.models')
const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    // res.send(`i am from home route`)
    res.sendFile(__dirname + "/views/index.html")
})
router.get('/users',(req,res)=>{
    res.status(202).json({
        users
    })
})

module.exports=router