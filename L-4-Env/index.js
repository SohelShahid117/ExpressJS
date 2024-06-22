//express js bangla tutorial 12 : How to set up environment variables
//https://youtu.be/dxwUjw2Jyfc?si=Pf0301FGjc6vHyFv

require('dotenv').config()     //https://www.npmjs.com/package/dotenv
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.port || 3001
const hostName = '127.0.0.1'

app.get('/',(req,res)=>{
    res.send('<b>i am from home route</b>')

})

app.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})