//express js bangla tutorial 11 : regular expression in express routing
const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

/*
app.get('/',(req,res)=>{
    res.send('i am from home route')
})
*/

app.get('/products/:id([0-9]+)',(req,res)=>{  //here use regular expression-1 or more digit
    // res.send('i am from home route')
    const id = req.params.id
    res.send(`<h2>Id:${id}</h2>`)
})

/*
app.get('/products/:title([a-zA-Z]{3})',(req,res)=>{ //here use regular expression==3 letter
    const title = req.params.title
    res.send(`title is : ${title}`)
})
*/

app.get('/products/:title([a-zA-Z0-9]+)',(req,res)=>{ //here use RegEx with combination letter+number ; 1 or more
    const title = req.params.title
    res.send(`title is : ${title}`)
})

app.use('*',(req,res)=>{
    res.status(404).send({
        'message':'not a valid route'
    })
})

app.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})