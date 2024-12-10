import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
import close from '../assets/icons/close.svg'
import '../styles/LoginPage.css';

export default function HomePage() {
    const [showHideLoginPopup,setShowHideLoginPopup] = useState(false);
    const [email,setEmail] = useState('');
    const [rememberPwd,setRememberPwd] = useState('');
    const [pwd,setPwd] = useState('');

    const displaySignInPopup = ()=>{
        setShowHideLoginPopup((prev)=>!prev);
    }

  return (
    <div style={{height:"100vh",backgroundColor:"red"}}>
        <NavBar showHideLoginPopup = {showHideLoginPopup}
        displaySignInPopup = {displaySignInPopup}/>
        {showHideLoginPopup?
            <>
            <div className="popupBoxMain login">
            <div className="image"></div>
              <div className="popupBox" >
                <div className="exit" style={{cursor:"pointer"}} onClick={displaySignInPopup}  >
                  <img src={close} alt="closeImage" />
                </div>
                <h2 style={{color:"white",fontSize:"24px"}}>LOGIN</h2>
                <form id="searchDonor">
                  <div className="input" style={{ width: '100%' }}>
                    <input
                      id="email"
                      placeholder="Email"
                      type="email"
                      key="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      id="pwd"
                      placeholder="Password"
                      type="password"
                      key="password"
                      required
                      name="password"
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </div>
                  <div className='rememberPwd' style={{fontSize:"12px", color: 'white', fontWeight: '300',marginTop:"10px"}}>
                    <div className='rem'>
                    <input type='checkbox' checked={rememberPwd}/>
                        <label>Remember Me</label>
                    </div>
                    
                    <Link
                    style={{fontSize:"12px", color: 'white', fontWeight: '300', textDecorationLine: 'underline'}}
                    to={'/login'}
                  >
                    Forgot Password?
                  </Link>
                    </div>
                  <button className="AsaSubmit">
                    SUBMIT
                  </button>
                  <div className='register' style={{fontSize:"12px", color: 'white', fontWeight: '300', marginTop:"30px"}}>
                    <span style={{marginRight:"10px"}}>Don't have an account?</span>
                    <Link
                    style={{fontSize:"12px", color: 'white', fontWeight: '300', textDecorationLine: 'underline'}}
                    to={'/login'}
                  >
                    Back to login
                  </Link></div>
                  
                </form>
              </div>
              
            </div>
          </>
        :null}
    </div>
  )
}
