require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const app = express()
const session = require ('express-session')
const {SERVER_PORT,CONNECTION_STRING,SECRET} = process.env
const studCtrl = require('./controller/studController')
const teachCtrl = require('./controller/teachController')

app.post('/auth/student',studCtrl.registerStudent)
app.post('/auth/studentlogin',studCtrl.loginStudent)
app.post('/auth/teacher',teachCtrl.registerTeacher)
app.post('/auth/teacherlogin',teachCtrl.loginTeacher)

app.use(express.json())
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true, 
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
