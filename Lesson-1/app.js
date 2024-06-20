//express js bangla tutorial 3 : http methods and postman
const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send('i am a get request at home(/) route')
})
// app.get("/about",(req,res)=>{
//     res.send('i am a get request at about route')
// })
app.post("/",(req,res)=>{
    res.send('i am a post request at home route')
})
app.put("/",(req,res)=>{
    res.send('i am a put request at home route')
})
app.get("/delete",(req,res)=>{
    res.send('i am a get request at delete route')
})

module.exports = app