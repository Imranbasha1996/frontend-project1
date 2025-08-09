import React, { useState } from 'react'
import'./Home.css'
import Header from '../../Components/Headers/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import MovieDisplay from '../../Components/MoviesDisplay/MovieDisplay'
const Home = () => {
  let [category,setcategory]=useState('All')
  return (
    <div>

      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <MovieDisplay category={category}/>
    </div>
  )
}

export default Home
