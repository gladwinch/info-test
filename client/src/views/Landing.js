import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

import './Landing.css'

function Landing(props) {
    const context = useContext(UserContext)
    const [password, setPassword] = useState({ password: '' })

    const onChange = event => {
        context.setPassError({})
        setPassword({ [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        context.loginUser('UPDATE', password)
        setPassword({password: '' })
    }

    return (
        <div className="d-flex justify-content-center align-items-center landing_container">
            <div className="login_card bg-white px-5 pb-5 pt-4 shadow">
                <div className="login-text">Login</div>
                <form onSubmit={onSubmit}>
                    <label>Your Password</label>
                    
                    <div className="input-group-lg">
                        <input type="text" className={`form-control is-invalid ${context.passError.password && 'is-invalid'}`} 
                            onChange={onChange} value={password.password} name="password"
                            placeholder="Your Password" className="form-control login-pass"  />
                    </div>
                    <span style={{ fontSize: '0.8rem' }}
                        className="text-danger"
                    >{context.passError.password}</span>

                    <button type="submit"
                        className="btn btn-success btn-lg btn-block my-3">Login</button>
                </form>
                <div className="ct-divider"></div>
                <button type="button" onClick={() => context.loginUser('NEW SUBMIT')}
                    style={{ backgroundColor: '#08921c', color: 'white'}}
                    className="btn btn-lg btn-block mt-4">Submit New Form</button>
            </div>
        </div>
    )
}

export default Landing;
