const text = require('./pageText')
const translate = require('@vitalets/google-translate-api')

const translateForm = async (lang) => {
    const translateText = await translate(text, { to: lang })
    let arrText = translateText.text.split("|")
    arrText = arrText.map(val => val.replace('\n','').trim())

    const formObject = {
        form: arrText[0],
        firstName: arrText[1],
        lastName: arrText[2],
        guardian: arrText[3],
        address: arrText[4],
        country: arrText[5],
        state: arrText[6],
        village: arrText[7],
        taluka: arrText[8],
        district: arrText[9],
        pincode: arrText[10],
        phoneNumber: arrText[11],
        whatsapp: arrText[12],
        telegram: arrText[13],
        emailAddress: arrText[14],
        password: arrText[15],
        generate: arrText[16],
        copy: arrText[17],
        submit: arrText[18],
        update: arrText[19],
        existing: arrText[20],
        userClickHere: arrText[21],
        login: arrText[22],
        aadhar: arrText[23],
        newFormClickHere: arrText[24],
        newForm: arrText[25]
    }

    return formObject
}

module.exports = translateForm