//routes
const express = require('express')
const getUser = require('/..controllers/users.controller')
const saveUser = require('/../controllers/users.controller')
const router = express().router

router.get('/',(req,res)=>{
    res.send('i am from home route')
})
/*
router.get('/users',(req,res)=>{
    res.send(htmlForm)
})
*/
router.get('/users',getUser)

/*
router.post('/users',(req,res)=>{
    const name = req.body.name
    const age = Number(req.body.age)
    const user = {name,age}
    users.push(user)
    // res.send(`user name :${name} & age: ${age}`)
    res.status(202).json({
        success:true,
        users
    })
})
*/
router.post('/users',saveUser)
module.exports = router