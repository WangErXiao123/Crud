const express = require('express')
const mongoose = require('mongoose')
const { join } = require('path')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
router = require('./router')

app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))

// 配置中间件

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'keybord cat',
    resave: false,
    saveUninitialized: true
}))

app.use(router)

// 配置404中间件
app.use(function(req, res){
    res.render('404.html')
})

// 配置错误中间件
app.use(function(err,req, res, next){
    res.status(500).json({
        err_code:500,
        message:err.message
    })
})


app.listen(3000, function(){
    console.log("running...")
})