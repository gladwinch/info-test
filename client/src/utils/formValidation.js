const formValidation = (values) => {
    let errors = {}

    if (values.firstName.trim() === '') {
        errors.firstName = 'First name must not be empty'
    }
    if (values.lastName.trim() === '') {
        errors.lastName = 'Last name must not be empty'
    }
    if (values.guardian.trim() === '') {
        errors.guardian = 'Guardian must not be empty'
    }
    if (values.aadharCard.trim() === '') {
        errors.aadharCard = 'AadharCard must not be empty'
    }
    if (values.street.trim() === '') {
        errors.street = 'Address must not be empty'
    }
    if (values.state.trim() === '') {
        errors.state = 'State must not be empty'
    }
    if (values.country.trim() === '') {
        errors.country = 'Country must not be empty'
    }

    if (values.phone.trim() === '') {
        errors.phone = 'Phone must not be empty'
    } else {
        let pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        let phoneValid = values.phone.trim().match(pattern)
        if(!phoneValid) errors.phone = 'Please enter a valid phone number'
    }

    if (values.password.trim() === '') {
        errors.password = 'Password must not be empty'
    }

    if (values.email.trim() === '') {
        errors.email = 'Email must not be empty'
    } else {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let emailValid = values.email.match(pattern)
        if(!emailValid) errors.email = 'Please enter a valid email id'
    }
    
    if (values.pincode.trim() === '') {
        errors.pincode = 'Pincode must not be empty'
    }

    return errors
}

export default formValidation