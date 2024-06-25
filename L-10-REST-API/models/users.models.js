const {v4:uuidv4} = require("uuid")
const users = [
    {
        id:uuidv4(),
        username:"sohel",
        email:"soheleee09@gmail.coom"
    },
    {
        id:uuidv4(),
        username:"shahid",
        email:"shahid09@gmail.coom"
    }
]

module.exports=users