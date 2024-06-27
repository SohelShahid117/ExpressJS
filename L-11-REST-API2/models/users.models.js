const { v4: uuidv4 } = require('uuid');
//uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const users = [
    {
        id:uuidv4(),
        userName :"sohel",
        email:"sohel09@g.c"
    },
    {
        id:uuidv4(),
        userName :"sumi",
        email:"sumi09@g.c"
    }
]

module.exports = users