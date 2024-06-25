const users = require("../models/users.models")
// const users = require("../views/users.views")
const path = require('path')

exports.getUsers= (req,res)=>{
    // res.send('i am from user route')
    // res.send(htmlForm)
    // res.sendFile(__dirname+'../index.html')
    // res.sendFile(path.join(__dirname+"/index.html"))
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

exports.saveUsers = (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age

    const user = {
        name,email,age
    }
    users.push(user)
    // res.send('i am from user route--->POST Method')
    // res.send(`User is ${name}.Email ${email}.Age ${age}`)
    res.status(202).json({
        success:true,
        users
    })
}