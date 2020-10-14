const express = require('express')
const router = express.Router()
const translateForm = require('../../utils/helper')

router.get('/:lang', async (req, res) => {
    let lang = req.params.lang || 'en'
    try {
        let transText = await translateForm(lang)
        
        console.log(transText)
        res.json(transText)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            data: null,
            message: 'Unsuccessful translate'
        })
    }
})

module.exports = router