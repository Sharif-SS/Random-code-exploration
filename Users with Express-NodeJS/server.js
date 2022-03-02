const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    console.log('Here')
    //res.download('server.js')
    //res.json({message: "Error"})
    res.render('index', {sampleText: "world"})
    
})


//connecting our mini application
const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000)

//end server ctrl c
//start server npm run devStart