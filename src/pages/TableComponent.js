import React from 'react';
import '../styles/TableStyles.css'

export default function TableComponent() {
  const donors = [
    { date: '2024-10-01', time: '10:00 AM', location: 'Colombo', status: 'Pending' },
    { date: '2024-10-02', time: '11:00 AM', location: '13,1/kandepola,buluwala,Kurunegala', status: 'Completed' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
  ];

  return (
    <div className="D-leaderboard">
      <table>
        <tr style={{ checkboxAlign: 'center' }} className="Ahead">
          <th>Donation ID</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {donors.length > 0 ? (
          donors.map((donor, index) => (
            <tr style={{ checkboxAlign: 'center' }}>
              <td className="D-index">DID{index + 1}</td>
              <td>{donor.date}</td>
              <td>{donor.time}</td>
              <td>{donor.location} </td>
              <td>{donor.status} </td>
              <td className="AdlButton">
                <button style={{ padding: '4px 40px', alignItems: 'center' }}>EDIT</button>
              </td>
            </tr>
          ))
        ) : (
          <p>No donors available</p>
        )}
      </table>
    </div>
  );
}
