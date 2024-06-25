const express = require('express')
const cors = require('cors')
const  bodyParser = require('body-parser')

var app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // res.send(`i am from home route`)
    res.sendFile(__dirname + "/index.html")
})

//route error
app.use((req,res,next)=>{
    res.status(404).json({
        "message":"route not found"
    })
})

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        "message":"something broke"
    })
})

module.exports=app