import '../styles/DonorDashboard.css';

import statistic from '../assets/images/statistic.png';
import { useState, useEffect } from 'react';
import TopBannerComponent from '../components/TopBannerComponent';
import DonorDashboardService from '../services/DonorDashboardService';
import SidemenuComponent from '../components/SidemenuComponent';

function DonorDashboardPage() {
  const [donors, setDonors] = useState([]);
  const [allDonors, setallDonors] = useState([]);
  const [sumDonations, setSumDonations] = useState('');
  /* 
  const [sumTodayDonations, setSumTodayDonations] = useState(''); */


  // DUMMY DATA 
  const dummyData = {
    data:[
    { name: 'John Doe', district: 'Colombo', amount: '500' },
    { name: 'Jane Smith', district: 'Gampaha', amount: '750' },
    { name: 'Michael Perera', district: 'Kandy', amount: '300' },
    { name: 'Alicia Fernando', district: 'Kurunegala', amount: '600' },
    { name: 'Ryan Silva', district: 'Galle', amount: '450' },
  ]};
  // DUMMY DATA 

  const fetchDonors = async () => {
    const responseO =/*  await DonorDashboardService.getDonors(); */ dummyData;
    const response = responseO.data.slice(0, 3);
    const sumDonations = responseO.data.reduce((sum, donor) => sum + parseFloat(donor.amount), 0);
    setallDonors(responseO.data);
    setDonors(response);
    setSumDonations(sumDonations);
    console.log('Fetched Succesfully');
  };

  useEffect(() => {
    fetchDonors();
  }, []);
  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'donor'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            {
              <div className="D-counts-main">
                <div className="D-counts">
                  <div className="D-counts-box">
                    <img src={statistic} alt="static" />
                    <div className="D-box-info">
                      <p>Total Donors</p>
                      <p>{allDonors.length.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="D-counts-box">
                    <img src={statistic} alt="static" />
                    <div className="D-box-info">
                      <p>Total Donations</p>
                      <p>{sumDonations.toLocaleString()} mL</p>
                    </div>
                  </div>
                  <div className="D-counts-box">
                    <img src={statistic} alt="static" />
                    <div className="D-box-info">
                      <p>Today's Donations</p>
                      <p>10,456 mL</p>
                    </div>
                  </div>
                </div>
              </div>
            }

            <h1>Leaderboard</h1>
            <div className="D-leaderboard" style={{height:"auto"}}>
              
              <table style={{ marginTop: '40px' }}>
                {donors.length > 0 ? (
                  donors.map((donor, index) => (
                    <tr>
                      <td className="D-index">{index + 1}</td>
                      <td>{donor.name}</td>
                      <td>{donor.district}</td>
                      <td>{donor.amount} mL</td>
                    </tr>
                  ))
                ) : (
                  <p>No donors available</p>
                )}
              </table>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default DonorDashboardPage;
