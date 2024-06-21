//express js bangla tutorial 10 : Area Calculator project
//https://youtu.be/u1BgJg6YzYM?si=J4FWM7c7r-sYhqBI

const express = require('express')
const app = express()
const port = 3002
const hostName = '127.0.0.1'

const bodyParser = require('body-parser')          //https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    // res.send('i am from home router')
    res.sendFile(__dirname+'/index.html')
})
app.get('/circle',(req,res)=>{
    // res.send('i am from home router')
    res.sendFile(__dirname+'/circle.html')
})

app.post('/circle',(req,res)=>{
    const radius = req.body.radius
    const area = Math.PI*radius*radius
    res.send(`Radius of circle is ${radius}.Area = ${area}`)
})

app.get('/triangle',(req,res)=>{
    // res.send('i am from home router')
    res.sendFile(__dirname+'/triangle.html')
})
app.post('/triangle',(req,res)=>{
    const base = req.body.base
    const height = req.body.height
    const area = 0.5*base*height
    res.send(`Triangle Base:${base},Height:${height}.Area=${area}`)
})

app.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})