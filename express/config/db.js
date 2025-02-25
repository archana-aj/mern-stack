const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://archanajayagopalan:samplepassword@cluster0.aw1xo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const connection = mongoose.connection

connection.on('connection', () => { console.log('db connected') })
connection.on('error', () => {console.log('db error') })