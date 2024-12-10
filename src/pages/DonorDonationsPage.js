import React, { useState } from 'react';
import SideMenuComponent from '../components/SidemenuComponent';
import TopBannerComponent from '../components/TopBannerComponent';
import '../styles/DonorDonationsStyles.css';

function DonorDonationsPage() {
  const [donation, setDonation] = useState('');

  const viewDonation = (donorId) => {
    setDonation(donorId);
  };

  const donors = [
    {
      id: 1,
      date: '2024-10-01',
      time: '10:30 AM',
      location: 'New York, NY',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-10-02',
      time: '12:00 PM',
      location: 'Los Angeles, CA',
      status: 'Pending',
    },
    {
      id: 3,
      date: '2024-10-03',
      time: '09:15 AM',
      location: 'Chicago, IL',
      status: 'In Progress',
    },
    {
      id: 4,
      date: '2024-10-04',
      time: '02:45 PM',
      location: 'Houston, TX',
      status: 'Cancelled',
    },
    {
      id: 5,
      date: '2024-10-05',
      time: '11:00 AM',
      location: 'Miami, FL',
      status: 'Scheduled',
    },
    {
      id: 5,
      date: '2024-10-05',
      time: '11:00 AM',
      location: 'Miami, FL',
      status: 'Scheduled',
    },
  ];
  return (
    <>
      <div className="D-main">
        <SideMenuComponent userRole={'donor'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            {donation !== '' ? (
              <>
                <h1>The Result</h1>
                <div className="previewPDF">
                  <div className="PDF" />
                </div>
                <div className="download" />
              </>
            ) : (
              <>
                <h1>Donations</h1>

                <div className="D-leaderboard" style={window.innerHeight<"1366px"?{ marginTop: '40px', height: '380px' }:{marginTop: '40px', height: '220px'}}>
                  <table>
                    <tr style={{ textAlign: 'center' }} className="Ahead">
                      <th>Date</th>
                      <th>Time</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    {donors.length > 0 ? (
                      donors.map((donor) => (
                        <tr style={{ textAlign: 'center' }}>
                          <td>{donor.date}</td>
                          <td>{donor.time}</td>
                          <td>{donor.location}</td>
                          <td>{donor.status}</td>
                          <td className="AdlButton">
                            <button onClick={() => viewDonation(donor.id)} style={{ padding: '4px 20px' }}>
                              VIEW
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No donors available</p>
                    )}
                  </table>
                </div>
              </>
            )}
          </div>
        }
      </div>
    </>
  );
}
export default DonorDonationsPage;
