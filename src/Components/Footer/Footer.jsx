import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkd from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


const Footer = () => {
    return (

        <div className="footer-container">

            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={github} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkd} alt="" />
                </div>
                <div className="logo-r">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>

    )
}

export default Footer