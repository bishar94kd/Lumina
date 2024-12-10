import React, { useEffect, useState } from 'react'
import SidemenuComponent from '../components/SidemenuComponent'
import TopBannerComponent from '../components/TopBannerComponent'
import '../styles/DonorProfile.css'
import profileImage from '../assets/images/updateProfile.png'
import DonorProfileServices from '../services/DonorProfileService'

export default function DonorProfilePage({donorID}) {
  const [fName,setFName] = useState('');
  const [lName,setLName] = useState('');
  const [email,setEmail] = useState('');
  const [nic,setNIC] = useState('');
  const [address,setAddress] = useState('');
  const [zipCode,setZipCode] = useState('');
  const [dob,setDob] = useState('');
  const [bloodType,setBloodType] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [gender,setGender] = useState('');

  const [isDonor,setIsDonor] = useState('');
  const [isVolunteer,setIsVolunteer] = useState('');

  useEffect(()=>{
    fetchDonorInformations();
  },[])

  const fetchDonorInformations = async()=>{
    try{
      /* const response = await DonorProfileServices.fetchDonorProfile();
      const data = response.data;
      setFName(data.first_name);
      setLName(data.last_name);
      setEmail(data.email);
      setNIC(data.nic);
      setAddress(data.address);
      setZipCode(data.zip_code);
      setDob(data.dob);
      setBloodType(data.blood_type);
      setMobileNo(data.mobile_no);
      setGender(data.gender);
       */
      const dummyDonorData = {
        donorID: "12345",
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        nic: "991234567V",
        address: "123 Main Street, Colombo",
        zip_code: "10000",
        dob: "1990-01-15",
        blood_type: "O+",
        mobile_no: "+94712345678",
        gender: "Male",
        isDonor: true,
        isVolunteer: false,
        role: "Donor",
    };
    setFName(dummyDonorData.first_name);
      setLName(dummyDonorData.last_name);
      setEmail(dummyDonorData.email);
      setNIC(dummyDonorData.nic);
      setAddress(dummyDonorData.address);
      setZipCode(dummyDonorData.zip_code);
      setDob(dummyDonorData.dob);
      setBloodType(dummyDonorData.blood_type);
      setMobileNo(dummyDonorData.mobile_no);
      setGender(dummyDonorData.gender);
    }catch(error){
      console.log(error);
      alert("Error Fetching user profile Informations");
    }
  }

  const saveProfile = async()=>{
    try{
      const updatedData = {
        first_name:fName,
        last_name:lName,
        email:email,
        nic:nic,
        address:address,
        zipCode:zipCode,
        dob:dob,
        blood_type:bloodType,
        mobile_no:mobileNo,
        gender:gender,
        is_donor:isDonor,
        is_volunteer:isVolunteer
      };
      DonorProfileServices.updateDonorProfile(updatedData);
      alert('Profile Updated Succesfully!')
    }catch(error){
      console.log(error);
      alert("There is an error saving profile")
    }
  }

  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'donor'} />
        {
          <div className="Aappointments" >
            <TopBannerComponent  />
            <div className='donor-profile'>
              <div className='donor-profile-image'>
                <img src={profileImage} alt='profile' />
                <p>{fName+" "+lName}</p>
              </div>
              <form style={{backgroundColor:"rgba(0, 0, 0, 0.75)"}}>
                {/* DEFINE ROLES */}
              <div className='roles'>
                <div className='donor' style={{marginRight:"20px"}}>
                  <input name='donor' onChange={(e)=>setIsDonor(e.target.checked)} checked={isDonor} id='donor' type='checkbox'/>
                  <label for="donor">Donor</label><br></br>
                </div>
                <div className='volunteer pInput'>
                  <input name="volunteer" onChange={(e)=>setIsVolunteer(e.target.checked)} checked={isVolunteer} id='volunteer' type='checkbox'/>
                  <label for="volunteer">volunteer</label><br></br>
                </div>
              </div>
              {/* DEFINE PROFILE INFORMATIONS */}
              <div className='profile-info'>
                <div className='leftSide'>
                <div className='pInput'>
                  <label for="volunteer">First Name</label><br></br>
                    <input id='volunteer' type='text' name='fName' placeholder='First Name' value={fName} onChange={(e)=>setFName(e.target.value)}/>
                </div>
                <div className='pInput'> 
                  <label for="email">Email</label><br></br>
                    <input id='email' type='text' name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='pInput'>
                  <label for="nic">NIC</label><br></br>
                    <input id='nic' type='text' name='nic' placeholder='NIC' value={nic} onChange={(e)=>setNIC(e.target.value)}/>
                </div>
                <div className='pInput'>
                  <label for="address">Address</label><br></br>
                    <input id='address' type='text' name='address' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
                </div>
                <div className='pInput'> 
                  <label for="zipCode">Zip Code</label><br></br>
                    <input id='zipCode' type='text' name='zipCode' placeholder='Zip Code' value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>
                </div>
                </div>
                <div className='rightSide'>
                <div className='pInput'>
                  <label for="lName">Last Name</label><br></br>
                    <input id='lName' type='text' name='lName' placeholder='Last Name' value={lName} onChange={(e)=>setLName(e.target.value)}/>
                </div>
                <div className='pInput'>
                  <label for="dob">Date Of Birth</label><br></br>
                    <input id='dob' type='date' name='dob' placeholder='Date Of Birth' value={dob} onChange={(e)=>setDob(e.target.value)}/>
                </div>
                <div className='pInput'>
                  <label for="bloodType">Blood Type</label><br></br>
                    <input id='bloodType' type='text' name='bloodType' placeholder='Blood Type' value={bloodType} onChange={(e)=>setBloodType(e.target.value)}/>
                </div>
                <div className='pInput'>
                  <label for="mobileNo">Mobile No</label><br></br>
                    <input id='mobileNo' type='text' name='mobileNo' placeholder='Mobile No' value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)}/>
                </div>
                <div className='pInput'>
                  <label for="gender">Gender</label><br></br>
                    <input id='gender' type='text' name='gender' placeholder='Gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
                </div>
                <button className='AsaSubmit' style={{margin:"10px 0px 0px 0px ",padding:"4px 10px"}}>CHANGE PASSWORD</button>
                </div>
              </div>
              <div className='buttonsBottom'>
              <button className='AsaSubmit' style={{marginTop:"10px"}}>CANCEL</button>
              <button className='AsaSubmit' style={{marginTop:"10px"}} onSubmit={saveProfile}>SAVE</button>
              </div>
              {/* DEFINE UPDATE PROFILE buttonS */}
              </form>
            </div>
          </div>
        }
      </div>
    </>
  )
}
