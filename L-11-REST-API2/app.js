const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const getAllUsers = require('./controllers/users.controllers')
const createUser = require('./controllers/users.controllers')
const updateUser = require('./controllers/users.controllers')

const app = express()
app.use(cors())

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

//users route
app.get("/users",getAllUsers)
app.post("/users",createUser)
app.put("/users/:id",updateUser)


//route not found
app.use((req,res,next)=>{
    res.status(404).json({
        "message":"route not found"
    })
})

//server err
app.use((err,req,res,next)=>{
    res.status(500).json({
        "message":"something/server broke"
    })
})

module.exports = app