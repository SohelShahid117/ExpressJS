const express = require('express')
const app = express()
const port = 3000
const hostName = '127.0.0.1'

const userRouter = require('../L-8-MVC-architecture2/routes/users.routes')

app.use(express.urlencoded({extended:true}))
app.use(userRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"resource not found"
    })
})

app.listen(port,()=>{
    console.log(`server running at http://${hostName}:${port}`)
})