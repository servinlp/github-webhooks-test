const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : process.env.DEV_PORT

app.set('views', './views')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('*', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Hello from http://localhost:${PORT}`)
}) 