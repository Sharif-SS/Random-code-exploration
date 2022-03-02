//mini application using router

const express = require('express')
const router = express.Router()

//they all start at /users
router.get('/', (req, res) => {
    res.send('User list')

})

//keep this above id
router.get('/new', (req, res) => {
    res.send('User new form')

})

router.post('/', (req, res) => {
    res.send('Create User')

})


//router.route("/:id").get.put.delete blah blah can be used to chain all the below
// and clean it up

router.get('/:id', (req, res) => {
    res.send(`get user with ID ${req.params.id}`)

})

router.put('/:id', (req, res) => {
    res.send(`update user with ID ${req.params.id}`)

})

router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)

})

//stopped at 2114
module.exports = router