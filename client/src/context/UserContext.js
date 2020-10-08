import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import formValidation from '../utils/formValidation'
import formData from '../utils/formData'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const history = useHistory()
    const [userData, setUserData] = useState(formData)
    const [tempToken, setTempToken] = useState({ token: '' })
    const [loading, setLoading] = useState(false)
    const [passError, setPassError] = useState({})
    const [errors, setErrors] = useState({})

    const onChange = event => {
        setErrors({})
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const saveUserData = async () => {
        let errData = formValidation(userData)

        if(Object.keys(errData).length !== 0) {
            setErrors(errData)
            return
        }

        let route = userData._id ? 'update-user' : 'add-new-user'

        try {
            setLoading(true)
            let response= await axios.post(`/api/farmer/${route}`, userData)
            setErrors({})

            setUserData(response.data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setErrors(errors)
            setLoading(false)
        }
    }

    const loginUser = async(mode, password) => {
        if(mode === 'NEW SUBMIT') {
            setTempToken({ token: "kj3jkh-3rj32-fdg" })
            history.push('/submit')
            return
        }

        if(mode === 'UPDATE' && password) {
            if(password.password.length === 0) {
                setPassError({ password: "Enter password!" })
                return
            }

            try {
                let response = await axios.post('/api/farmer/login', password)
                setUserData(response.data.data)
                history.push('/submit')
            } catch (err) {
                console.log(err.response.data.message)
                setPassError({ password: err.response.data.message })
            }
        }
    }

    const setNewUser = () => setUserData(formData)

    return (
        <UserContext.Provider value={{ userData, setUserData, saveUserData, errors, loading, tempToken, loginUser, setNewUser, onChange, passError, setPassError }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider