let users = require("../models/users.models")
const { v4: uuidv4 } = require('uuid');
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const getAllUsers = (req,res)=>{
    res.status(200).json({users})
}

//create user
const createUser = (req,res)=>{
    
    const newUser = {
        id:uuidv4(),
        userName :req.body.userName,
        email:req.body.email
    }
    users.push(newUser)

    res.status(201).json(users)
    
    // res.status(201).json({
    //     "message":"i am post method"
    // })
}

//update user
const updateUser = (req,res)=>{
    // const id = req.params.id
    const id = req.params.id
    res.status(202).json({
        // "message":"i am update method"
        "message":id
    })
}


module.exports=getAllUsers
module.exports=createUser
module.exports = updateUser