import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

import { Link, Navigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({ setShowlogin, showLogin }) => {
    let { token, setToken } = useContext(StoreContext)

    let [Menu, setMenu] = useState('Home')

    let logout=()=>{
        localStorage.removeItem('token')
        setToken('')
        Navigate('/')
    }
    return (
        <div className='navbar'>
            <img id='logo' src={assets.logo} alt="Logo" />

            <div>
                <ul className="navbar-menu">
                    <Link to='/' onClick={() => setMenu('Home')} className={Menu === "Home" ? 'active' : ''}>Home</Link>
                    <a href='#explore-menu' onClick={() => setMenu('MovieList')} className={Menu === "MovieList" ? 'active' : ''}>MovieList</a>
                    <a href='#app-download' onClick={() => setMenu('MobileApp')} className={Menu === "MobileApp" ? 'active' : ''}>MobileAPP</a>
                    <a href='#footer' onClick={() => setMenu('Contact')} className={Menu === "Contact" ? 'active' : ''}>Contact</a>
                    {/* <a href='' onClick={() => setMenu('Cart')} className={Menu === 'Cart' ? 'active' : ''}>Cart</a> */}

                </ul>
            </div>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search " />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="basket icon" />
                    </Link>

                    {/* <div className="dot">


                    </div> */}


                </div>
                {!token ?
                    <button onClick={() => setShowlogin(!showLogin)}>Sign in</button> :
                   <div className='navbar-profile'>
          <img src={assets.person} alt="" />
          <ul className="nav-profile-dropdown">
            <li>
                {/* <img src={assets.bag} alt="" /> */}
            <p>Booking</p></li>
            <hr />
            <li>
                {/* <img src={assets.logout_icon} alt=""  /> */}
            <p onClick={logout}>Logout</p></li>
          </ul>
          </div>
          }
                
            </div>


        </div>
    )
}

export default Navbar
