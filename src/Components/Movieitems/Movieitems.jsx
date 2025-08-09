import React, { useContext, useState } from 'react'

import { assets } from '../../assets/assets'
import './Movieitem.css'
import { StoreContext } from '../../Context/StoreContext'
const Movieitems = ({ id, name, image, price, description, category ,url}) => {

    let [itemcount, setitemcount] = useState(0)
    let { cartItems, addCart, removeCart } = useContext(StoreContext)


    return (
        <div className='movie-item'>
            <div className="movie-item-image-container">
                {/* <img className='movie-item-image' src={url+'/images/'+image} alt="itemiamge" id='movie1' /> */}
                 <img className='movie-item-image' src={assets.movie_2} alt="itemiamge" id='movie1' />
            </div>
            <div className="movie-item-info">
                <div className="movie-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_stars} alt="rating" />
                    {
                        !cartItems[id] ? <button className='add' onClick={() => addCart(id)}>Add</button> :
                            <div className='movie-item-container'>
                                <img onClick={()=>removeCart(id)} src={assets.remove} alt="" />
                                <p>{cartItems[id]}</p>
                                <img onClick={() => addCart(id)} src={assets.add_icon} alt="" />
                            </div>
                    }

                </div>
                <p className='movie-item-description'>{description}</p>
                <p className="movie-item-price">${price}</p>
            </div>

        </div>

    )
}

export default Movieitems
