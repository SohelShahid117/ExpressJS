const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'


/*
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
*/

app.use(express.urlencoded({extended:true}))

//models
const users = [
    {
        "name":"shahid",
        "email":"shahid09@gmail.com",
        "age":33
    },
    {
        "name":"sumi",
        "email":"sumi09@gmail.com",
        "age":32
    }
]


//views
const htmlForm = `
<form method="post" action="/users">
    <input type="text" name="name" placeholder="enter name"> </br></br>
    <input type="email" name="email" placeholder="enter email"> </br></br>
    <input type="number" name="age" placeholder="enter age"> </br></br>
    <button type="submit">Save User</button>
</form>
`


//routes+controllers
app.get('/',(req,res)=>{
    res.send('i am from home route')
})
app.get('/users',(req,res)=>{
    // res.send('i am from user route')
    res.send(htmlForm)
})
app.post('/users',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const age = req.body.age

    const user = {
        name,email,age
    }
    users.push(user)
    // res.send('i am from user route--->POST Method')
    // res.send(`User is ${name}.Email ${email}.Age ${age}`)
    res.status(202).json({
        success:true,
        users
    })
})

app.use((req,res,next)=>{
    res.status(404).json({
        message:"resource not found"
    })
})

app.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})