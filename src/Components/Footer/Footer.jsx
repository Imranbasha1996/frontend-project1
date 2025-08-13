import React from 'react'
import './Footer.css'

import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.logo} alt="logo" />
          <p>Your access to all things entertainment is here! With BookMyShow, discover the latest movies, biggest concerts, most awaited sporting events, plays, and various other LIVE event experiences.</p>
          <div className="footer-social-icons">
            {/* <img src={assets.linkedin_icon} alt="Linkedin Icon" /> */}

            <img src={assets.facebook} alt="facebookicon" />

            <img src={assets.insta} alt='insta' />

            <img src={assets.whatsapp} alt='whattsapp' />

            <img src={assets.youtube} alt='youtube' />
          </div>


        </div>
        <div className="footer-content-center">
          <h2>MoViE M@StI</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>

            <li>Privacy Policy</li>
          </ul>


        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-987-456-7890</li>
            <li>contact@movie-tickes.com</li>
          </ul>


        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Tickets-Booking || All Rights Reserved
      </p>



    </div>

  )
}

export default Footer
