const express = require('express') //importing express
let contacts = require('./contacts.js') //importing our own custom library in the contacts file with the method

const app = express()
const port = 3000

app.use(express.json()) //telling express we are going to receive a json object
app.use(express.urlencoded({extended: true})) //telling it also to only accept these 2 types

app.post('/contacts', contacts.add_contact ) //that method in contacts

app.listen(port, () => { //using express the server is always listening on that port 3000
    console.log('contact app is listening on port '+port)

})