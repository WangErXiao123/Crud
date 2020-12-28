const express = require('express')
const mongoose = require('mongoose')
const { join } = require('path')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
router = require('./router')

app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))

// 配置中间件

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(router)


app.listen(3000, function(){
    console.log("running...")
})