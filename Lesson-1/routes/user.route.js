const express = require("express")
const router = express.Router()

app.get("/",(req,res)=>{
    res.send('<h1>i am a get request at home(/) route</h1>')
    res.end()
})

app.get("/about",(req,res)=>{
    res.send('<h1>i am a get request at about route</h1>')
})
app.get("/register",(req,res)=>{
    res.send('<h1>i am a get request at register route</h1>')
})
app.get("/login",(req,res)=>{
    res.send('<h1>i am a get request at login route</h1>')
})

app.post("/",(req,res)=>{
    res.send('<h1>i am a post request at home route</h1>')
    res.end()
})
app.put("/",(req,res)=>{
    res.send('<h1>i am a put request at home route</h1>')
    res.end()
})
app.delete("/",(req,res)=>{
    res.send('<h1>i am a delete request at delete route</h1>')
    res.end()
})