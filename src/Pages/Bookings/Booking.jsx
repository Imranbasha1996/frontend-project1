import React, { useContext, useEffect, useState } from 'react'
import './Booking.css'
import { StoreContext } from '../../Context/StoreContext'
const Booking = ({ url }) => {

  let { getTotalCartAmount, token } = useContext(StoreContext)

// const [selectedTime, setSelectedTime] = useState(""); 
//   const [selectedSeats, setSelectedSeats] = useState([]);

//  const showTimings = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]; 

//   const toggleSeat = (seat) => {
//     setSelectedSeats((prevSeats) =>
//       prevSeats.includes(seat)
//         ? prevSeats.filter((s) => s !== seat)
//         : [...prevSeats, seat]
//     );
//   };

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  }

  // useEffect(()=>{
  //     console.log(data)
  // },[data])

  let paymentfunction=async(e)=>{
e.preventDefault()
console.log('payment function called')
let responce=await axoios.post('http://localhost:4000/api/orderds/place',{},{headers:{token}})
if(responce && respone.status===200){
  window.location.herf=responce.data.url
  console.log(responce.data)

}
else{
  console.log('error')
}
  }

  

  return (
    <form  onChange={paymentfunction}action="" className='place-order'>
      <div className="place-order-left">
        <p className="title">Booking  Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' name='frist name' onChange={onChangeHandler} />
          <input type="text" placeholder='Last Name' name='last name' onChange={onChangeHandler} />
        </div>
        <input type="text" placeholder='Email address' name='Email' onChange={onChangeHandler} />
        <input type="text" placeholder='Street' name='street' onChange={onChangeHandler} />
        <div className="multi-fields">
          <input type="text" placeholder='City' name='City' onChange={onChangeHandler} />
          <input type="text" placeholder='State' name='State' onChange={onChangeHandler} />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' name='zip Code' onChange={onChangeHandler} />
          <input type="text" placeholder='Country' name='country' onChange={onChangeHandler} />
        </div>
        <input type="text" placeholder='Phone' name='phone number' onChange={onChangeHandler} />


      </div>
       {/* <div className="show-timings">
          <p className="title">Select Show Timing</p>
          <div className="timing-options">
            {showTimings.map((time) => (
              <button
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  // handleTimeSelection(time);
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
 <div className="seat-selection">
          <p className="title">Select Your Seats</p>
          <div className="seat-grid">
            {seats.map((seat) => (
              <div
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        </div>
         */}
        
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
          <button type='Submit'>Cheak to Payment</button>
        </div>



      </div>


    </form>

  )
}

export default Booking
