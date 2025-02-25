const express = require('express')
const db = require('./config/db')
const db = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send("Welcome to srver")
})

app.listen(port, () => {
    console.log('server is running in port:' + port)
})

console.log("Hello Hi")