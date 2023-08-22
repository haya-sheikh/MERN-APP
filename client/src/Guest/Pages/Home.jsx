import React from 'react'
import { Link } from 'react-router-dom';
import Brands from '../Components/Brands'


function Home() {
  return (
    <>
   <div className="web-banner">
   
    <p className="overlay-text">25% OFF</p>
    <small className="overlay-texts">Save big on SAMYANG <br /> our excelling brand to rescue your hunger!</small>
   



</div>
  <Brands/>
    </>
  )
}

export default Home