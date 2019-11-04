require('dotenv').config()
const express = require('express')
const massive = require ('massive')
const app = express()
const session = require ('express-session')
const {SERVER_PORT,CONNECTION_STRING,SECRET} = process.env
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

app.use(express.json())

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} mariachis in town !`))
