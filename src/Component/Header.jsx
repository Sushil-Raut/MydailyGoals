import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    {/* <nav>Get Ready to Complete Your Daily Goals</nav> */}
    <div className='Header'>
      < Link to="/">Home</Link>
      <Link to="/About">About</Link>      
      <Link to="/Contact Us">Contact</Link>
      
    </div>
  
    </>
  )
}


export default Header
