//express js bangla tutorial 15 : MVC architecture
//https://youtu.be/BDeBB9b2L9I?si=sgJN7RuLsmtEJ_GM

const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

const htmlForm = `
<form>
    <input type="text" name="name" placeholder="type your name">
    <input type="number" name="age" placeholder="type your age">
</form>

`

app.get('/',(req,res)=>{
    res.send('i am from home route')
})
app.get('/users',(req,res)=>{
    res.send('<h1>Hello users</h1>')
})

app.use((req,res,next)=>{
    res.status(404).json({
        'message':'resource not found'
    })
})

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})