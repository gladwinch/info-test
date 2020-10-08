import { useState } from 'react'

const useForm = (callback, initialState = {}, validate) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})

    const onChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
            
        callback()
        // setValues(initialState)
    }

    return {
        onChange,
        onSubmit,
        values,
        errors
    }
}

export default useForm