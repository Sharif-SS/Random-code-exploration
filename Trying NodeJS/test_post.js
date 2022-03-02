const request = require('request')

const endpoint = 'http://localhost:3000'

let data_1 = { //send a object with

    name: 'Sharif',
    email: 'test@email.com',
    tel: '709-852-1258',
    address: 'My address'
}

request.post({ //sends to server

    headers: {'content-type': 'application/json'}, //the object type specified
    url:endpoint+'/contacts', //what to do
    body: JSON.stringify(data_1) //converts to string

}, (err, response, body) => {
    if (err){
        console.log(err)

    } else {
        console.log(body)
    }

})