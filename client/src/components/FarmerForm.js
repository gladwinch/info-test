import React, { useContext, useState } from 'react';
import generator from 'generate-password'
import { UserContext } from '../context/UserContext'
import passImage from '../assets/password.png'
import clipboardImg from '../assets/clipboard.png'

function FarmerForm() {
    const context = useContext(UserContext)
    const errors = context.errors

    const onSubmit = event => {
        event.preventDefault()
        context.saveUserData()
    }

    const generatePassword = () => {
        let genPassword = generator.generate({ length: 14, numbers: true })
        context.setUserData({ ...context.userData, password: genPassword, })
    }

    return (
        <form onSubmit={onSubmit} autoComplete="new-password">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input type="text" autoComplete="off"
                        className={`form-control ${errors.firstName && 'is-invalid'}`} 
                        name="firstName"
                        placeholder="First Name"
                        value={context.userData.firstName}
                        onChange={context.onChange} 
                    />
                    {errors.firstName && (
                        <div className="invalid-feedback">
                            { errors.firstName }
                        </div>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input type="text"
                        className={`form-control ${errors.lastName && 'is-invalid'}`}  
                        name="lastName"
                        placeholder="Last Name"
                        value={context.userData.lastName}
                        onChange={context.onChange} 
                    />
                    {errors.lastName && (
                        <div className="invalid-feedback">
                            { errors.firstName }
                        </div>
                    )}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Guardian Name</label>
                    <input type="text"
                        className={`form-control ${errors.guardian && 'is-invalid'}`}  
                        name="guardian"
                        placeholder="Guardian Name"
                        value={context.userData.guardian}
                        onChange={context.onChange} 
                    />
                    {errors.guardian && (
                        <div className="invalid-feedback">
                            { errors.guardian }
                        </div>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Aadhar Card Number</label>
                    <input type="text"  
                        className={`form-control ${errors.aadharCard && 'is-invalid'}`}  
                        name="aadharCard"
                        placeholder="Aadhar Card Number"
                        value={context.userData.aadharCard}
                        onChange={context.onChange} 
                    />
                    {errors.aadharCard && (
                        <div className="invalid-feedback">
                            { errors.aadharCard }
                        </div>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label>Address: Society/Street/House Number</label>
                <input type="text"
                    className={`form-control ${errors.street && 'is-invalid'}`}  
                    name="street"
                    placeholder="Address"
                    value={context.userData.street}
                    onChange={context.onChange}
                />
                {errors.street && (
                    <div className="invalid-feedback">
                        { errors.street }
                    </div>
                )}
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Village</label>
                    <input type="text"
                        className="form-control" 
                        name="village"
                        placeholder="Village"
                        value={context.userData.village}
                        onChange={context.onChange} 
                    />
                </div>

                <div className="form-group col-md-6">
                    <label>Taluka</label>
                    <input type="text"
                        className="form-control" 
                        name="taluka"
                        placeholder="Taluka"
                        value={context.userData.taluka}
                        onChange={context.onChange} 
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>District Name</label>
                    <input type="text"
                        className="form-control" 
                        name="district"
                        placeholder="District"
                        value={context.userData.district}
                        onChange={context.onChange} 
                    />
                </div>

                <div className="form-group col-md-6">
                    <label>State Name</label>
                    <input type="text"
                        className={`form-control ${errors.state && 'is-invalid'}`} 
                        name="state"
                        placeholder="State"
                        value={context.userData.state}
                        onChange={context.onChange} 
                    />
                    {errors.state && (
                        <div className="invalid-feedback">
                            { errors.state }
                        </div>
                    )}
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Pincode</label>
                    <input type="text"
                        className={`form-control ${errors.pincode && 'is-invalid'}`} 
                        name="pincode"
                        placeholder="Pincode"
                        value={context.userData.pincode}
                        onChange={context.onChange} 
                    />
                    {errors.pincode && (
                        <div className="invalid-feedback">
                            { errors.pincode }
                        </div>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Country</label>
                    <input type="text" 
                        className={`form-control ${errors.country && 'is-invalid'}`} 
                        name="country"
                        placeholder="Country"
                        value={context.userData.country}
                        onChange={context.onChange} 
                    />
                    {errors.country && (
                        <div className="invalid-feedback">
                            { errors.country }
                        </div>
                    )}
                    {/* <ul className={`suggestionCard ${countries.length === 0 && 'd-none'}`}>
                        { countries.map((country, i) => <li key={i} className="suggestionItem">{ country }</li>)}
                    </ul> */}
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Phone Number</label>
                    <input type="text"
                        className={`form-control ${errors.phone && 'is-invalid'}`} 
                        name="phone"
                        placeholder="Phone Number"
                        value={context.userData.phone}
                        onChange={context.onChange} 
                    />
                    {errors.phone && (
                        <div className="invalid-feedback">
                            { errors.phone }
                        </div>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Whatsapp</label>
                    <input type="text"
                        className="form-control"
                        name="whatsapp"
                        placeholder="Whatsapp"
                        value={context.userData.whatsapp}
                        onChange={context.onChange} 
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Telegram</label>
                    <input type="text"
                        className="form-control"
                        name="telegram"
                        placeholder="Telegram"
                        value={context.userData.telegram}
                        onChange={context.onChange} 
                    />
                </div>

                <div className="form-group col-md-6">
                    <label>Email address</label>
                    <input type="text"
                        name="email"
                        className={`form-control ${errors.email && 'is-invalid'}`} 
                        placeholder="Email address"
                        value={context.userData.email}
                        onChange={context.onChange} 
                    />
                    {errors.email && (
                        <div className="invalid-feedback">
                            { errors.email }
                        </div>
                    )}
                </div>
            </div>

            <div className={`form-group ${!context.userData._id && 'd-none '} d-flex align-items-end justify-content-between`}>
                <div className="d-flex flex-column" style={{ flex: '1' }}>
                    <label>Password</label>
                    <input type="text"
                        name="password"
                        className={`form-control ${errors.password && 'is-invalid'}`} 
                        // style={{ flex: '1' }}
                        placeholder="Password"
                        value={context.userData.password}
                        onChange={context.onChange} 
                    />
                    {errors.password && (
                        <div className="invalid-feedback">
                            { errors.password }
                        </div>
                    )}
                </div>
                <div className="d-flex ml-4">
                    <div className="mr-3">
                        <label>Generate</label>
                        <button type="button" onClick={() => generatePassword()}
                            className="btn bg-success d-flex align-items-end justify-content-center shadow-sm" 
                            style={{ maxHeight: '2.4rem'}}>
                            <img style={{ height: '1.36rem', width: 'auto' }}
                                src={passImage} alt="generate password." />
                        </button>
                    </div>
                    <div>
                        <label>Copy</label>
                        <button type="button" 
                            onClick={() => {navigator.clipboard.writeText(context.userData.password)}}
                            className="btn bg-white d-flex align-items-end justify-content-center shadow-sm" 
                            style={{ maxHeight: '2.4rem'}}>
                            <img style={{ height: '1.36rem', width: 'auto' }}
                                src={clipboardImg} alt="copy password." />
                        </button>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-success btn-block mt-4">
                <div className={`spinner-border spinner-border-sm text-light ${!context.loading && 'd-none'}`} 
                    role="status" >
                    <span className="sr-only">Loading...</span>
                </div>
                <span className={`${context.loading && 'd-none'}`}>
                    { context.userData._id ? 'Update' : 'Submit' }
                </span>
            </button>
        </form>
    )
}

export default FarmerForm;
