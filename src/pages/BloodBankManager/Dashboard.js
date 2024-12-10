import React from 'react'
import SidemenuComponent from '../../components/SidemenuComponent';
import TopBannerComponent from '../../components/TopBannerComponent';
import BloodStatistics from '../../components/BloodBankManager/BloodStatistics';
import { Chart } from 'chart.js';
import '../../styles/BBM/Phlebotomist.css'

export default function Dashboard() {
  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'bbm'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            <BloodStatistics />
            <div className="statistics-and-chart">
                <div className="statistics-section">
                <div className="statistics-box">
                    <p className="stat-label">Total Visitors</p>
                    <h4 className="stat-value">1,567</h4>
                </div>
                <div className="statistics-box">
                    <p className="stat-label">Total Blood Donors</p>
                    <h4 className="stat-value">837</h4>
                </div>
                <div className="statistics-box">
                    <p className="stat-label">Today Visitors</p>
                    <h4 className="stat-value">289</h4>
                </div>
                <div className="statistics-box">
                    <p className="stat-label">Today Blood Donors</p>
                    <h4 className="stat-value">250</h4>
                </div>
                </div>

                <div className="chart-section">
                    {/* <Chart /> */}
                </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}
