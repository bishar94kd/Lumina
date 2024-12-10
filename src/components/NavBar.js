import React, { useState } from 'react'
import logo from '../assets/icons/LuminaLogo.ico';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar({showHideLoginPopup,displaySignInPopup}) {
    
  return (
    <div className='navbar'>
        <div className='navbar-left'>
        <Link to={'/'}><div className='logo'><img src={logo} alt='logo'/><span className='logo-text'>Lumina</span></div></Link>
        </div>
        <div className='navbar-centered'>
        <ul>
            <Link to={'/'}><li>HOME</li></Link>
            <Link to={'/aboutus'}><li>ABOUT US</li></Link>
            <Link to={'/contactus'}><li>CONTACT US</li></Link>
            <Link to={'/feedback'}><li>FEEDBACK</li></Link>
            <Link to={'/help'}><li>HELP</li></Link>
        </ul>
        </div>
        <div className='navbar-right'>
            <button style={{marginRight:"20px"}} className='AsaSubmit'>SIGN UP</button>
            <button onClick={()=> displaySignInPopup()} className='AsaSubmit'>SIGN IN</button>
        </div>
    </div>
  )
}