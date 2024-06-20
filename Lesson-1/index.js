//express js bangla tutorial 2 : how to create express server
//https://youtu.be/t9GVn5j1Hsw?si=jBiPGgPIXSa_0cvF
//get,post,put,delete
//read,create,update,delete

const app = require('./app')

const port = 3000
const hostName = '127.0.0.1'

app.listen(port,()=>{
    console.log(`server is running at http://${hostName}:${port}`)
})
