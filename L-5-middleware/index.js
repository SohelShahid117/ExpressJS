//express js bangla tutorial 13 : middleware in express.js
//https://youtu.be/byiRZfg2JaE?si=nkNgMvsLHINGL8sN

const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

const myMiddleware = (req,res,next)=>{
    console.log('middleware is working.here next params is a function')
    req.currentTime = new Date(Date.now())
    next()
}

app.use(myMiddleware) //common middleware.

app.use((req,res,next)=>{
    res.send('404!!! bad url request')
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/',myMiddleware, (req,res)=>{
    // console.log('i am home.' + req.currentTime)
    // res.send('i am from home route using get method')
    res.send('i am home route.' + req.currentTime)
})

app.get('/about',myMiddleware, (req,res)=>{
    res.send('i am about route.' + req.currentTime)
})

// app.use(myMiddleware) //common middleware.

app.get('/contact', (req,res)=>{
    res.send('i am contact route.' + req.currentTime)
})


app.post('/',(req,res)=>{
    res.send('i am from home route using post method')
})

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port} `)
})