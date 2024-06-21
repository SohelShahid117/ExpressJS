//express js bangla tutorial 4 : express js router and routes
const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send('<h1>i am a get request at home(/) route</h1>')
    res.end()
})

router.get("/about",(req,res)=>{
    res.send('<h1>i am a get request at about route</h1>')
})
router.get("/register",(req,res)=>{
    res.send('<h1>i am a get request at register route</h1>')
})
router.get("/login",(req,res)=>{
    res.send('<h1>i am a get request at login route</h1>')
})

router.post("/",(req,res)=>{
    res.send('<h1>i am a post request at home route</h1>')
    res.end()
})
router.put("/",(req,res)=>{
    res.send('<h1>i am a put request at home route</h1>')
    res.end()
})
router.delete("/",(req,res)=>{
    res.send('<h1>i am a delete request at delete route</h1>')
    res.end()
})
router.use((req,res)=>{
    res.send("<h1>404 !!! Page Not Found</h1>")
})

module.exports = router