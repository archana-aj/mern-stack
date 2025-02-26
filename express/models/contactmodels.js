const mongoose = require('mongoose')

const contactModel = new
mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true

    },
    phone:{
        type: String,
        unique: true,
        required: true
    }
})

const contacts=
mongoose.model("contact", contactModel)
module.exports = contacts