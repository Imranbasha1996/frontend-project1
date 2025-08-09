import React, { useContext } from 'react'
import './Booking.css'
import { StoreContext } from '../../Context/StoreContext'
const Booking = () => {

   let {  getTotalCartAmount } = useContext(StoreContext)
  return (
    <form action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Booking  Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />






      </div>
      <div className="place-order-right">

        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>{getTotalCartAmount()}</p>


            </div>
            <div className="cart-total-detials">
              <p>PopCorn</p>
              <p>{100}</p>
            </div>
            <div className="cart-total-details">
              <p><b>Total</b></p>
              <b>{getTotalCartAmount() + 100}</b>


            </div>


          </div>
          <button >Cheak to Payment</button>
        </div>



      </div>


    </form>

  )
}

export default Booking
