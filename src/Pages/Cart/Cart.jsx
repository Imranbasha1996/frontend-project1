import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { Link, Navigate } from 'react-router-dom'
const Cart = () => {

  let { movie_list, cartItems, removeCart, getTotalCartAmount ,url} = useContext(StoreContext)

  // let nav = Navigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div>


          {movie_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+'/images'+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => removeCart(item._id)}>x</p>

                  </div>
                  <hr />

                </div>
              )

            }

          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Sub total</p>
                <p>{getTotalCartAmount()}</p>


              </div>
              <div className="cart-total-detials">
                <p>PopCorn</p>
                <p>Rs.{100}/-</p>
              </div>
              <div className="cart-total-details">
                <p><b>Total</b></p>
                <b>Rs.{getTotalCartAmount() + 100}/-</b>


              </div>

              {/* <button onClick={() => nav('/booking')}>Proceed to Checkout</button> */}

            </div>
            <Link to='/Booking'>
              <button>Proceed to Checkout</button>
            </Link>
          </div>

        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Please enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promocode' />

              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
      <div>

      </div>
    </div>

  )
}

export default Cart
