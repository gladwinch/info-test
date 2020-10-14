const translate = require('@vitalets/google-translate-api')
const { response } = require('express')
const text = require('./utils/pageText')

const runMe = async () => {
    const val = text.split(",")
    let textVal = await translate(text, { to: 'en' })
    
    console.log(textVal.text)
}
runMe()
