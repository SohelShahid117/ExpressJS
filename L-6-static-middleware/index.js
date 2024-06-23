//tutorial 14 : express static middleware
//https://youtu.be/lqRIy6d6D48?si=kfXaE7eBEW0tzc9Y
const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

app.use(express.static("public"))

app.get('/',(req,res)=>{
    // res.send('i am home route')
    res.sendFile(__dirname + '/index.html')
})

app.listen(port,(req,res)=>{
    console.log(`server is running at http://${hostName}:${port}`)
})