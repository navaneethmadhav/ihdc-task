import React from 'react'

import '../Styles/Benefits.css'
import celeb from '../Assets/Images/celeb.png'

const Benefits = () => {
    return (
        <div>
            <div className='container'>
                <div className="benefits-container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className="benefits-form-section">
                                <div className="benefits-form-header">
                                    <div className="form-header">
                                        <h1>Unlock Exclusive Benefits</h1>
                                    </div>
                                </div>

                                <div className="benefits-form-wrapper">
                                    <div className="input-container">
                                        <h5>PHONE NUMBER</h5>
                                        <div className="ph_no-input-container">
                                            <input type="text" />
                                            <input type="number" />
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <h5>NAME</h5>
                                        <div className='input-text-container'>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="input-container">
                                        <h5>EMAIL [OPTIONAL]</h5>
                                        <div className='input-text-container'>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="form-btn-container">
                                        <button>CONTINUE</button>
                                        <p>Get ready to receive a secret code (OTP) on your phone</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <div className="benefits-img-section">
                                <div className="benefits-image-container">
                                    <img src={celeb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits