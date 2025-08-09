import React, { useContext } from 'react'
import './MovieDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Movieitems from '../Movieitems/Movieitems'
const MovieDisplay = ({ category }) => {

    let { movie_list } = useContext(StoreContext)
    return (
        <div className='movie-display' id='movie-display'>
            <h2>Latest Movies</h2>
            <div className="movie-display-list">
                {movie_list.map((item, index) => {


                    {
                        if (category === 'All' || category===item.category)
                             {
                    return <Movieitems key={index} id={item._id} name={item.name} price={item.price} description={item.description} category={item.category} />
                        }
                    }

                    
                })}

            </div>
        </div>
    )
}

export default MovieDisplay
