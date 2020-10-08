const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const FarmerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add a name"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please add a name"],
        trim: true
    },
    guardian: {
        type: String,
        required: [true, "Father/Husband's Name"]
    },
    aadharCard: {
        type: String,
        required: [true, "Please add aadharcard number"]
    },
    street: String,
    village: String,
    taluka: String,
    district: String,
    state: String,
    pincode: String,
    country: String,
    phone: {
        type: String,
        required: [true, "Please add phone number"],
        match: [
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            'Please add a valid phone number'
        ],
    },
    whatsapp: String,
    telegram: String,
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Farmer', FarmerSchema)