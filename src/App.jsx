import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Movielist from './Pages/MoviesList/Movielist'
import Booking from './Pages/Bookings/Booking'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

import Language from './Pages/Languages/Language'
import Footer from './Components/Footer/Footer'
import AppDownload from './Components/AppDownload/AppDownload'
import Signinpopup from './Components/SigninPopup/Signinpopup'



const App = () => {

  const [showLogin, setShowlogin] = useState(false);


  return (
    <div className='app'>

{showLogin ? <Signinpopup setShowlogin={setShowlogin} /> : <></>}

      <Navbar setShowlogin={setShowlogin} showLogin={showLogin} />
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/movielist' element={<Movielist />}></Route>
        <Route path='/language' element={<Language />}></Route>
      </Routes>

      <AppDownload />
      <Footer />
    </div>
  )
}

export default App
