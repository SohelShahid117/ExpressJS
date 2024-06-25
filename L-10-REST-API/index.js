//express js bangla tutorial 17 : REST API without database | MVC
//https://youtu.be/b2W8IKipw90?si=tZg0oKpkojWb_cZ1cd 

const app = require('./app')
// const path = require('path')

const port = 4000
const hostName = '127.0.0.1'

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})
