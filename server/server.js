require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const app = express()
const session = require ('express-session')
const {SERVER_PORT,CONNECTION_STRING,SECRET} = process.env
app.use(express.json())
const studCtrl = require('./controller/studController')


app.post('/auth/student',studCtrl.registerStudent)
app.post('/auth/studentlogin',studCtrl.loginstudent)


app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUnitialized: true, 
    })
    )
    massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set("db", dbInstance)
    },
    console.log('db is working'),
    
    )
.catch(err=>console.log(err))


app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} mariachis in town !`))
