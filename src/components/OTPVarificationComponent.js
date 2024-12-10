import React from 'react';
import close from '../assets/icons/close.svg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/OtpVerification.css';
import emailjs from '@emailjs/browser';

export default function OTPVarification() {
  const userName = 'Adithya';
  const [email, setEmail] = useState('');
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const [actualOTP, setActualOTP] = useState('');
  const [showOTPisIncorrect, setShowOTPisIncorrect] = useState(false);
  const [otpIsCorrect,setOTPIsCorrect] = useState(false);
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('')

  // OTP Timer
  const [seconds, setSeconds] = useState(59);

  const inputsRef = useRef([]);

  //Order Of Display Popup of OTP
  const [showEmail, setShowEmail] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [showOTPVeryfied, setShowOTPVeryfied] = useState(false);

  //OTP Input Boxes
  const handleOnChange = (e, index) => {
    if (e.target.value.length === 1) {
      const newInputs = [...inputs];
      newInputs[index] = e.target.value;
      setInputs(newInputs);
    }
    if (inputsRef.current[index + 1] && e.target.value.length === 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '' && index > 0) {
        inputsRef.current[index - 1].focus();
      } else {
        const newInputs = [...inputs];
        newInputs[index] = '';
        setInputs(newInputs);
      }
    }
  };

  const checkIfTheEnteredOTPIsCorrect = (e) => {
    e.preventDefault();
    // Convert userOTP to an string to match the generated otp
    const enteredOTP = inputs.join('');
    if (enteredOTP === actualOTP) {
      console.log('OTP IS CORRECT');
      setShowOTPisIncorrect(false);
      setShowOTP(false);
      setOTPIsCorrect(true);
      setShowOTPVeryfied(true);
    } else {
      setShowOTPisIncorrect(true);
    }
  };

  // Send the email with the OTP

  const sendTheEmail = (e) => {
    e.preventDefault();
    
    // Reset the timer to 59 seconds
    setSeconds(59);
    startCountTime();
  
    // Generate the OTP
    const generatedOTP = generateOTP();
    setActualOTP(generatedOTP);
  
    // Hide the email input screen and show the OTP screen
    setShowEmail(false);
    setShowOTP(true);
  
    // Prepare the email content
    const formData = {
      message: 'Your OTP Number is ' + generatedOTP,
      from_name: 'lumina@gmail.com',  // This can be the sender's email
      to_name: userName,             // Optional, used for personalizing the email
      user_email: email,             // Send OTP to the email entered by the user
    };
  
    // Send email using EmailJS
    emailjs
      .send('service_pd43ajg', 'template_hd6lvkd', formData, {
        publicKey: 'tj3yugUQZd7CnNT1o',
      })
      .then(
        () => {
          console.log('Email Sent Successfully!');
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        }
      );
  };
  
  // Count Timer

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          const newOTP = generateOTP();
          setActualOTP(newOTP);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const startCountTime = () => {
    setSeconds(59);
  };

  // Generate the OTP to send
  const generateOTP = () => {
    
    let randomNumber = '';
    for (let i = 0; i < inputs.length; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    console.log(randomNumber);
    return randomNumber;
  };

  // Reset Password
  const resetPassword =(e)=>{
    
  }

  return (
    <div>
      {showEmail ? (
        <>
          <div className="popupBoxMain">
            <div className="popupBox" style={{ borderRadius: '30px 0px 0px 30px', border: 'none' }}>
              <div className="exit" style={{ left: 0, borderRadius: '30px 0px 30px 0px '}}>
                <img src={close} alt="closeImage" />
              </div>
              <form onSubmit={(e) => sendTheEmail(e)} id="searchDonor">
                <div className="input" style={{ width: '100%' }}>
                  <input
                    id="emailOTP"
                    style={{
                      backgroundColor: 'transparent',
                      border: '0px',
                      borderBottom: '0.01em solid black',
                      width: '100%',
                      fontSize: '12px',
                      color: 'white',
                      fontWeight:"300",
                      
                    }}
                    autoComplete="off"
                    placeholder="Please Enter Your Email"
                    type="text"
                    key="email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button style={{ marginTop: '-90px' }} className="AsaSubmit">
                  SUBMIT
                </button>
                <Link
                  style={{fontSize:"12px", color: 'white', fontWeight: '300', textDecorationLine: 'underline', marginTop: '50px' }}
                  to={'/login'}
                >
                  Back to login
                </Link>
              </form>
            </div>
            <div className="image"></div>
          </div>
        </>
      ) : showOTP ? (
        <>
          <div className="popupBoxMain">
            <div className="image"></div>
            <div className="popupBox" style={{ width: '830px' }}>
              <div className="exit">
                <img src={close} alt="closeImage" />
              </div>
              <form onSubmit={(e) => checkIfTheEnteredOTPIsCorrect(e)}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'space-between',
                  }}
                >
                  <div className="top" style={{textAlign:"center"}}>
                    <p style={{ fontSize: '28px', fontWeight: '600', marginTop: '30px' }}>OTP VERIFICATION</p>
                    <p style={{ fontSize: '15px', marginTop: '-10px', fontWeight: '300', textAlign: 'center' }}>
                      An OTP has been sent to your email <span style={{ color: '#bfbfbf' }}>{`(${email})`}</span> to reset
                      your password and valid for 1 mins
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column',alignItems:"center" }} className="bottom">
                    <p
                      id="otpIncorrect"
                      style={
                        showOTPisIncorrect
                          ? { fontSize: '20px', marginLeft: '40px', marginTop: '-20px' }
                          : { color: 'transparent', marginTop: '-20px' }
                      }
                    >
                      Entered OTP Is Incorrect
                    </p>

                    <div style={{ marginLeft: '20px' }}>
                      {inputs.map((input, index) => {
                        return (
                          <input
                            className="inputBoxes"
                            style={{
                              width: '40px',
                              height: '40px',
                              marginRight: '10px',
                              fontSize: '20px',
                              textAlign: 'center',
                              backgroundColor: 'transparent',
                              border: '1px solid rgba(255,255,255,0.3)',
                              borderRadius: '3px',
                              boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                              color: 'white',
                            }}
                            key={index}
                            autoFocus={index === 0}
                            value={input}
                            ref={(el) => (inputsRef.current[index] = el)}
                            onChange={(e) => handleOnChange(e, index)}
                            maxLength={1}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                          />
                        );
                      })}
                    </div>
                    <button
                    style={{width:"140px"}}
                      className='AsaSubmit'
                    >
                      CONTINUE
                    </button>
                    <div
                      className="timer"
                      style={{
                        border: '1px solid white',
                        color: 'white',
                        fontSize: '12px',
                        padding: '5px 20px',
                        borderRadius: '30px',
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                        backdropFilter: 'blur(0.1px) ',
                        marginTop:"10px"
                      }}
                    >{`00:${seconds > 9 ? seconds : '0' + seconds}`}</div>
                  </div>
                </div>
                <p style={{ fontSize:"12px", color: 'white', fontWeight: '300', marginTop: '10px' }}>
                  Not recieved an OTP?
                  <a
                    onClick={(e) => 
                      seconds === 0
                        ? sendTheEmail(e)
                        : alert(`cannot resent untill time expires. time remaining ${seconds}`)
                    }
                    style={{ color: 'white', textDecoration: 'underline', marginLeft: '30px' }}
                  >
                    Resend OTP
                  </a>
                </p>
                <Link
                  style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: '300',
                    textDecorationLine: 'underline',
                    marginLeft: '-50px',
                  }}
                  to={'/login'}
                >
                  Back to login
                </Link>
              </form>
            </div>
          </div>
        </>
      ) : 
        showOTPVeryfied?
        <>
            <div className="popupBoxMain login">
            <div className="image"></div>
              <div className="popupBox" >
                <div className="exit" style={{cursor:"pointer"}} >
                  <img src={close} alt="closeImage" />
                </div>
                <h2 style={{color:"white",fontSize:"24px"}}>OTP VERIFIED !</h2>
                <form id="searchDonor">
                  <div className="input" style={{ width: '100%' }}>
                    <input
                      id="pwd"
                      placeholder="Password"
                      type="password"
                      key="password"
                      required
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      id="cpwd"
                      placeholder="Confirm Password"
                      type="password"
                      key="confirm password"
                      required
                      name="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className='rememberPwd' style={{fontSize:"12px", color: 'white', fontWeight: '300',marginTop:"10px"}}>
                    </div>
                  <button className="AsaSubmit" onClick={(e)=>resetPassword(e)}>
                    RESET PASSWORD
                  </button>
                  <div className='register' style={{fontSize:"12px", color: 'white', fontWeight: '300', marginTop:"30px"}}>
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
        :null
      }
    </div>
  );
}
