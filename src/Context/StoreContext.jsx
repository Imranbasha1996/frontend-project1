import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { movie_list } from '../assets/assets'

import axios from 'axios'

export let StoreContext = createContext(null)



let storeprovider = (props) => {
    let [token, setToken] = useState()
    let [movie_list, setMovieList] = useState([])

    useEffect(() => {

        async function loadData() {
            await fetchMovieList()
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'))
            }

        }
        loadData()
    }, [])


    let fetchMovieList = async () => {
        let respone = await axios.get(url + '/api/list')
        setMovieList(respone.data)
       
    }
    let url = 'http://localhost:5000'

    let [cartItems, setcartItems] = useState({})

    let addCart = async (itemId) => {
        console.log('this is console.log')
        console.log(itemId)
        if (!cartItems[itemId]) {

            setcartItems(prev => ({ ...prev, [itemId]: 1 }))

        }
        else {
            setcartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
         if(token){
        await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }

    }
    const removeCart = async (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }

    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = movie_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }

        return totalAmount;
    }

    let contextvalue = {

       movie_list,
       
        setMovieList,
        cartItems,
        setcartItems,
        addCart,
        removeCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }

    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeprovider
