import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/BBM/Donations.css';
import SidemenuComponent from '../../components/SidemenuComponent';
import TopBannerComponent from '../../components/TopBannerComponent';

export default function Donations() {
    const [data, setData] = useState([]);

  const BASE_URL = 'http://localhost:8080/api/bloodDonation'; 

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blood donation data:', error);
      }
    };

    fetchData();
  }, []);


  const handleAddClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/add`);
      alert('Blood Donation marked as added.');

      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error adding blood donation:', error);
    }
  };

  
  const handleDisposeClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/dispose`);
      alert('Blood Donation marked as disposed.');

      // Refresh data
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error disposing blood donation:', error);
    }
  };
  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'bbm'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            <div className="table-container">
                <table className="blood-donation-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Donor</th>
                        <th>Blood Type</th>
                        <th>Amount</th>
                        <th>Lab Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                        <td>{row.date}</td>
                        <td>{row.time}</td>
                        <td>{row.donor}</td>
                        <td>{row.bloodType}</td>
                        <td>{row.amount}</td>
                        <td>{row.labStatus}</td>
                        <td>
                            <button
                            className="btn green-btn"
                            onClick={() => handleAddClick(row.id)}
                            >
                            Add
                            </button>
                            <button
                            className="btn red-btn"
                            onClick={() => handleDisposeClick(row.id)}
                            >
                            Dispose
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
