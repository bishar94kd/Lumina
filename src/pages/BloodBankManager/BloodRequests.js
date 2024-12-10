import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/BBM//BloodRequests.css';
import TopBannerComponent from '../../components/TopBannerComponent';
import SidemenuComponent from '../../components/SidemenuComponent';

export default function BloodRequests() {
    const [data, setData] = useState([]);

  
  const BASE_URL = 'http://localhost:8080/api/bloodRequests'; //url eka 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching blood requests:', error);
      }
    };

    fetchData();
  }, []);

  
  const handleAddClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/add`);
      alert('Blood request marked as added.');
      
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error adding blood request:', error);
    }
  };

  
  const handleDisposeClick = async (id) => {
    try {
      await axios.post(`${BASE_URL}/${id}/dispose`);
      alert('Blood request marked as disposed.');
     
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error disposing blood request:', error);
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
                        <th>Blood Type</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id || index}>
                        <td>{row.date}</td>
                        <td>{row.time}</td>
                        <td>{row.bloodType}</td>
                        <td>{row.amount}</td>
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
