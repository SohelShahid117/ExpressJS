//controller
const path = require('path')
const users =require('/../controllers/users.controller')


const getUser = (req,res)=>{
    // res.send(htmlForm)
    // res.sendFile(__dirname + './views/index.html')
    // res.sendFile(__dirname + './views/index.html')
    res.sendFile(path.join(__dirname+"../views/index.html"))
}

const saveUser = (req,res)=>{
    const name = req.body.name
    const age = Number(req.body.age)
    const user = {name,age}
    users.push(user)
    // res.send(`user name :${name} & age: ${age}`)
    res.status(202).json({
        success:true,
        users
    })
}

module.exports = getUser
module.exports = saveUser