import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

import './Formpage.css'
import FarmerForm from '../components/FarmerForm'
import leftArrow from '../assets/left-arrow.png'

function Formpage(props) {
  const context = useContext(UserContext)

  useEffect(() => {
    if(!context.tempToken.token && !context.userData._id) props.history.push('/')
  },[])

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div style={{ fontSize: '2rem', fontWeight: '300'}} className="text-success">Form</div>
          <span onClick={() => props.history.push('/')} style={{ cursor: 'pointer' }}>
            <img style={{ height: '2.7rem', width: 'auto' }}
              src={leftArrow} alt="back" />
          </span>
        </div>
        <div className="row my-2">
            <div className="col px-4 py-3 form-contaier shadow-sm">
              <FarmerForm />
            </div>
            
            <div className="col d-flex justify-content-end align-items-start">
              { context.userData._id && (
                <div style={{marginTop: 40 + '%'}}>
                  <span className="display-1 text-success">Submit</span>
                  <div className="text-center sub-text">new form click here</div>
                  <div className="text-center mt-3">
                    <span style={{ cursor: 'pointer' }}
                      className="text-success" onClick={() => context.setNewUser()}>New form</span>
                  </div>
                </div>
              )}
              { !context.userData._id && (
                <div style={{marginTop: 40 + '%'}}>
                  <span className="display-1 text-success">Existing</span>
                  <div className="text-center sub-text">user click here</div>
                  <div className="text-center mt-3">
                    <Link className="text-success"
                      to={{
                          pathname: "/"
                      }}>
                        Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Formpage;
