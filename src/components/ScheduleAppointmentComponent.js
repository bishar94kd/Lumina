
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

export default function ScheduleAppointmentComponent() {
  const [location,setLocation] = useState('Colombo');
  const [date,setDate] = useState('');
  const [time,setTime] = useState(''); 
  const [status,setStatus] = useState('');
  const [donorId,setDonorId] = useState('7');
  const [fetchedTimes,setFetchedTImes] = useState([]);

// Dummy data for available times (use mock data for testing)
const dummyTimes = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

  const fetchAvailableTimes = useCallback(async(date)=>{
    try{
      const response = await axios.get(`http://localhost:3000/fetchData?date=${date}`,);
      setFetchedTImes(response.data.map((data)=>data.time));
    }catch(error){
      console.log("Error in fetching time under date   " +error)
    }

    /* if(date){
      setFetchedTImes(dummyTimes);
    } */
  },[])

  useEffect(()=>{
    if(date){
      fetchAvailableTimes(date);
    }
  },[date,fetchAvailableTimes]);

  const appoinment = { location, date, time, status };

  const createAnAppointment = async(e) =>{
    e.preventDefault();
    if(!location){
      alert("Select a location first");
    }else if(!date){
      alert('select a date first');
    }else if(!time){
      alert('You have to select a time to schedule an appointment');
    }else{
      try{
        await axios.post("http://localhost:3000/",appoinment);
        alert(`Succesfully Scheduled an appointment on date of on ${date} at ${time}` )
      }catch(error){
        console.log(error);
        alert("Failed to shedule");
      }
    }
  }

  const handleTimeChange = (time)=>{
    setTime(time);
  }

  const handleDateChange = (date)=>{
    setDate(date);
  }

  return (
    <>
      <form id='scheduleAppointmentForm' onSubmit={createAnAppointment}>
        <div className='Atitle'>
          <p style={{fontSize:"20px"}}>Schedule Appoinment</p>
        </div>
        <div className='LocationSelector'>
          <select value={location} >
            <option value={location}>Colombo</option>
          </select>
        </div>
        <div className='Adate'>
          <input onChange={(e)=>{handleDateChange(e.target.value)}} required type='date' name='date' id='date' value={date}/>
        </div>
        <div className='Atime'>
          <select required placeholder="pick a time" onChange={(e)=> handleTimeChange(e.target.value)} disabled={fetchedTimes.length === 0} >
            <option value="" disabled>Select a time</option>
            {
              fetchedTimes.map((time,index)=>(
                <option key={index} value={time}>{time}</option>
              ))
            }
          </select>
        </div>
        <button className='AsaSubmit' type='submit'>Schedule</button>
      </form>
    </>
  )
}
