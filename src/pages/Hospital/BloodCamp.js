import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Hospital/BloodCamp.css';
import SidemenuComponent from '../../components/SidemenuComponent'
import TopBannerComponent from '../../components/TopBannerComponent'

export default function BloodCamp() {
    const [data, setData] = useState([]);

  const BASE_URL = 'http://localhost:8080/api/bloodCamps'; 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blood camps:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/accept`);
      alert(`Blood Camp accepted.`);
     
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error accepting blood camp:', error);
    }
  };


  const handleDisposeClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/reject`);
      alert(`Blood Camp rejected.`);
     
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error rejecting blood camp:', error);
    }
  };
  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'hospital'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            <div className="table-container">
            <table className="bloodCamp-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Expected Donation</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                    <td>{row.date}</td>
                    <td>{row.time}</td>
                    <td>{row.location}</td>
                    <td>{row.expectedDonation}</td>
                    <td>
                        <button
                        className="btn green-btn"
                        onClick={() => handleAddClick(row.id)}
                        >
                        Accept
                        </button>
                        <button
                        className="btn red-btn"
                        onClick={() => handleDisposeClick(row.id)}
                        >
                        Reject
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
          </div>
        }
      </div>
    </>
  )
}
