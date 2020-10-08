const express = require('express')
const router = express.Router()
const ErrorResponse = require('../../utils/errorResponse')

const Farmer = require('../../models/Farmer')

router.post('/update-user', async (req, res, next) => {
    try {
        delete req.body.password
        let user = await Farmer.findByIdAndUpdate(req.body._id, req.body, { new: true, runValidators: true })

        res.json({
            success: true,
            message: 'Successful request!',
            data: user
        })
    } catch (err) {
        console.log(err)
        return next(new ErrorResponse('Something went wrong', 500))
    }
})

router.post('/add-new-user', async (req, res, next) => {
    try {
        delete req.body._id
        let user = await Farmer.create(req.body)
    
        res.status(200).json({
            success: true,
            message: 'route successful user',
            data: user
        }) 
    } catch (error) {
        console.log("Error: ", error)
        return next(new ErrorResponse('Something went wrong', 500))
    }
})

router.post('/login', async (req, res, next) => {
    let { password } = req.body

    let user = await Farmer.findOne({ password })

    if(!user) {
        res.status(404).json({
            success: false,
            message: 'User not found or invalid credential!',
            data: null
        })
    }

    res.status(200).json({
        success: true,
        message: 'Successful request!',
        data: user
    })
})

module.exports = router