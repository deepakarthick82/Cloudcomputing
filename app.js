const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const piazzaRoute = require('./routes/piazzapost')

const authRoute = require('./routes/auth')


app.use(bodyParser.json())


app.use('/piazzapost',piazzaRoute)
app.use('/user',authRoute)


app.get('/', (req,res)=>{
    res.send('Piazza test')

})

const MURL = 'mongodb+srv://deepakarthick2022:cloud1234@cluster0.vqy4urh.mongodb.net/piazza?retryWrites=true&w=majority'
mongoose.connect(MURL)

app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})


