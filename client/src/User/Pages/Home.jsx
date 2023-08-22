import React from 'react'
import Brands from '../Pages/Brands'
import Category from './Category'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    
     <div className="web-banner">
   
   <p className="overlay-text">25% OFF</p>
   <small className="overlay-texts">Save big on SAMYANG <br /> our excelling brand to rescue your hunger!</small>
  



</div>
    <Brands/>
    <Category/>
    </>
  )
}

export default Home