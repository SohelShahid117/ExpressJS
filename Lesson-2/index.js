//express js bangla tutorial 6 : http request with query parameter
//https://youtu.be/141Q7XhGGS8?si=tumdwKsVz0qBCCc3
//express js bangla tutorial 7 : http request with route parameter and header

const express = require('express')
const app = express()
const port = 3001
const hostName = '127.0.0.1'

/*
//Received Query parameter(http://127.0.0.1:3001/?id=101&name=sohel&age=99)
app.get('/',(req,res)=>{

    // const id = req.query.id
    // const name = req.query.name
    // const age = req.query.age

    const {id,name,age} = req.query
    res.send(` i am home route.Student id is ${id}.Name is ${name}.Age is ${age}`)
})
*/

/*
//received router params(http://127.0.0.1:3001/userId/2/age/25/name/sohel)
app.get('/userId/:id/age/:age/name/:name',(req,res)=>{
    const id = req.params.id
    const name = req.params.name
    const age = req.params.age
    res.send(`I am from home route.User ID is ${id}.Name is ${name}.Age is ${age}`)
})
*/

//received header params
app.get('/',(req,res)=>{
    const id = req.header("id")
    const name = req.header("name")
    const age = req.header("age")
    res.send(`I am from home router using header params.User Id is ${id}.Name is ${name}.Age is ${age}.`)
})

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})