//express js bangla tutorial 15 : MVC architecture
//https://youtu.be/BDeBB9b2L9I?si=sgJN7RuLsmtEJ_GM

const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'



// const userRouter = require('./routes/users.routes')
const router = require('./routes/users.routes')

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(userRouter)
app.use(router)

/*
//models

const users = [
    {
        name:"sohel",
        age:33
    },
    {
        name:"sumi",
        age:32
    }
]
*/

/*
const htmlForm = `
<form method="post" action="/users">
    <input type="text" name="name" placeholder="type your name"> </br></br>
    <input type="number" name="age" placeholder="type your age"> </br></br>
    <button type="submit">Save User</button>
</form>
`
*/
/*
//routes

app.get('/',(req,res)=>{
    res.send('i am from home route')
})
app.get('/users',(req,res)=>{
    // res.send('<h1>Hello users</h1>')
    // res.send('htmlForm')
    res.send(htmlForm)
})
app.post('/users',(req,res)=>{
    const name = req.body.name
    const age = Number(req.body.age)
    const user = {name,age}
    users.push(user)
    // res.send(`user name :${name} & age: ${age}`)
    res.status(202).json({
        success:true,
        users
    })
})
*/

app.use((req,res,next)=>{
    res.status(404).json({
        'message':'resource not found'
    })
})

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})