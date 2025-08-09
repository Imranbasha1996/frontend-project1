import React from 'react'
import './ExploreMenu.css'

import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setcategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Choose Movie Here</h1>

            <p className='paraExplore-menu'>MoViE M@StI is a one-stop solution for movies to watch this weekend. Find the latest Bollywood, Hollywood, Tollywood and Kollywood movies near you and book tickets online with discounts</p>
            {category}
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div key={index} className='explore-menu-list-items'>
                            <img className={category === item.menu_name ? 'active' : ''} onClick={() => setcategory((prev => prev === item.menu_name ? 'All' : item.menu_name))} src={item.menu_image} alt="menuimage" />
                            <p>{item.menu_name}</p>


                        </div>
                    )
                })}


            </div>


        </div>
    )


}

export default ExploreMenu
