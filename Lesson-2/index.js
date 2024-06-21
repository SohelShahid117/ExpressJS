//express js bangla tutorial 6 : http request with query parameter
//https://youtu.be/141Q7XhGGS8?si=tumdwKsVz0qBCCc3

const express = require('express')
const app = express()
const port = 3001
const hostName = '127.0.0.1'

app.get('/',(req,res)=>{
    // const id = req.query.id
    // const name = req.query.name
    // const age = req.query.age
    const {id,name,age} = req.query
    res.send(` i am home route.Student id is ${id}.Name is ${name}.Age is ${age}`)
})

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})