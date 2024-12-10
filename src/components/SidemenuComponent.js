import React, { useEffect, useState } from 'react';
import '../../src/styles/SidemenuComponent.css';

import dashboard from '../assets/icons/dashboard.svg';
import AppointmentImage from '../assets/icons/appointments.svg';
import donationsImage from '../assets/icons/donations.svg';
import logo from '../assets/icons/LuminaLogo.ico';
import bloodStatisticsImage from '../assets/icons/bloodStatistics.svg';
import employeeImage from '../assets/icons/employee.svg';
import phlebotomistImage from '../assets/icons/phlebotomist.svg';
import eligibilityTestsImage from '../assets/icons/eligibilityTesting.svg';
import labTechnicianImage from '../assets/icons/labTechnician.svg';
import bloodBankImage from '../assets/icons/bloodBank.svg';
import bloodBankInventoryImage from '../assets/images/bloodbankInventory.png';
import bloodReqeustsImage from '../assets/images/bloodRequest.png';
import historyImage from '../assets/icons/history.svg';
import bloodTestsImage from '../assets/icons/bloodTests.svg';
import menu from '../assets/icons/BurgerMenu.svg';
import logout from '../assets/icons/logout.svg';
import announcementImage from '../assets/icons/announcements.svg';

import { Link, useLocation } from 'react-router-dom';

export default function SidemenuComponent({ userRole }) {
  // Donor Menu
  const [userRoles, setUserRoles] = useState(false);
  const isDonorDashboard = useLocation().pathname === '/donorDashboard';
  const isDonorDonations = useLocation().pathname === '/donorDonations';
  const isDonorAppointment = useLocation().pathname === '/donorAppointments';

  // Phlebotomist Menu
  const isPhlebotomistReciveDonation = useLocation().pathname === '/PhlebotomistRecieveDonations';
  const isPhlebotomistDashboard = useLocation().pathname === '/';
  const isPhlebotomistBloodStatistics = useLocation().pathname === '/';

  // Admin menu
  const isAdminDashboard = useLocation().pathname === '/';
  const isAdminBloodStatistics = useLocation().pathname === '/';
  const isAdminBloodTests = useLocation().pathname === '/';
  const isAdminEmployee = useLocation().pathname === '/adminEmployee';
  const isAdminDonors = useLocation().pathname === '/';
  const isAdminDonorsAppointments = useLocation().pathname === '/';
  const isAdminDonorDonations = useLocation().pathname === '/';
  const isAdminPhlebotomist = useLocation().pathname === '/';
  const isAdminPhlebotomistEligibilityTests = useLocation().pathname === '/';
  const isAdminLabTechnician = useLocation().pathname === '/';
  const isAdminLabTechnicianBloodTests = useLocation().pathname === '/';
  const isAdminBankManager = useLocation().pathname === '/';
  const isAdminBankMangerBankInventory = useLocation().pathname === '/';
  const isAdminBankManagerBloodRequests = useLocation().pathname === '/';
  const isAdminAnnouncemnts = useLocation().pathname === '/';
  const isAdminActivityHistory = useLocation().pathname === '/';

  //Hospital Menu
  const isHospitalDashboard = useLocation().pathname === '/';
  const isHospitalBloodRequests = useLocation().pathname === '/';
  const isHospitalBloodCamp = useLocation().pathname === '/BloodCamp';

  //BBM Menu
  const isBBMDashboard = useLocation().pathname === '/BBMDashboard';
  const isBBMBloodInventory = useLocation().pathname === '/BBMBloodInventory';
  const isBBMBloodRequests = useLocation().pathname === '/BloodRequests';
  const isBBMDonations = useLocation().pathname === '/Donations';

  //Lab Technician Menu
  const isLabTechnicianDashboard = useLocation().pathname === '/';
  const isLabTechnicianBloodTest = useLocation().pathname === '/lTechBloodTest';

  //Volunteer Menu
  const isVolunteerDashboard = useLocation().pathname === '/';
  const isVolunteerBloodCamp = useLocation().pathname === '/';

  const handleToggler = (e) => {
    if ((e.key = 'Click')) {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('collapsed');
      }
    }
  };

  const active = {
    backgroundColor: 'rgba(255, 255, 255, 0.237)',
    backdropFilter: 'blur(1px)',
    cursor: 'pointer',
  };

  const menuItems = () => {
    if (userRole === 'admin') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item" style={{marginTop:"-10px"}}>
              <Link to="" className="nav-link" style={isAdminDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" style={isAdminBloodStatistics ? active : {}}>
                <img src={bloodStatisticsImage} />
                <span className="nav-label">Blood Statistics</span>
              </Link>
              <span className="nav-tooltip">Blood Statistics</span>
            </li>
            <li className="nav-item">
              <Link to="" className="nav-link" style={isAdminEmployee ? active : {}}>
                <img src={employeeImage} />
                <span className="nav-label">Employee</span>
              </Link>
              <span className="nav-tooltip">Employee</span>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={
                  isAdminDonors
                    ? active
                    : isAdminDonorsAppointments
                    ? active
                    : isAdminDonorDonations
                    ? active
                    : { cursor: 'pointer' }
                }
              >
                <img src={donationsImage} />
                <span className="nav-label">Donors</span>
              </div>
              <span className="nav-tooltip">Donors</span>
              <ul>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminDonorsAppointments ? active : {}}>
                    <img src={AppointmentImage} />
                    <span className="nav-label">Appointments</span>
                  </Link>
                  <span className="nav-tooltip">Appointments</span>
                </li>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminDonorDonations ? active : {}}>
                    <img src={donationsImage} />
                    <span className="nav-label">Donations</span>
                  </Link>
                  <span className="nav-tooltip">Donations</span>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                style={
                  isAdminPhlebotomist ? active : isAdminPhlebotomistEligibilityTests ? active : { cursor: 'pointer' }
                }
              >
                <img src={phlebotomistImage} />
                <span className="nav-label">Phlebotomist</span>
              </div>
              <span className="nav-tooltip">Phlebotomist</span>
              <ul>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminPhlebotomistEligibilityTests ? active : {}}>
                    <img src={eligibilityTestsImage} />
                    <span className="nav-label">Eligibility Tests</span>
                  </Link>
                  <span className="nav-tooltip">Eligibility Tests</span>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={isAdminLabTechnician ? active : isAdminLabTechnicianBloodTests ? active : { cursor: 'pointer' }}
              >
                <img src={labTechnicianImage} />
                <span className="nav-label">Lab Technician</span>
              </div>
              <span className="nav-tooltip">Lab Technician</span>
              <ul>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminBloodTests ? active : {}}>
                    <img src={bloodTestsImage} />
                    <span className="nav-label">Blood Tests</span>
                  </Link>
                  <span className="nav-tooltip">Blood Tests</span>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={
                  isAdminBankManager
                    ? active
                    : isAdminBankMangerBankInventory
                    ? active
                    : isAdminBankManagerBloodRequests
                    ? active
                    : { cursor: 'pointer' }
                }
              >
                <img src={bloodBankImage} />
                <span className="nav-label">Bank Manager</span>
              </div>
              <span className="nav-tooltip">Bank Manager</span>
              <ul>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminBankMangerBankInventory ? active : {}}>
                    <img src={bloodBankInventoryImage} />
                    <span className="nav-label">Bank Inventory</span>
                  </Link>
                  <span className="nav-tooltip">Bank Inventory</span>
                </li>
                <li className="nav-item hidden">
                  <Link to="" className="nav-link" style={isAdminBankManagerBloodRequests ? active : {}}>
                    <img src={bloodReqeustsImage} />
                    <span className="nav-label">Blood Requests</span>
                  </Link>
                  <span className="nav-tooltip">Blood Requests</span>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link" style={isAdminAnnouncemnts ? active : {}}>
                <img src={announcementImage} />
                <span className="nav-label">Annoncements</span>
              </Link>
              <span className="nav-tooltip">Annoncements</span>
            </li>

            <li className="nav-item">
              <Link to="" className="nav-link" style={isAdminActivityHistory ? active : {}}>
                <img src={historyImage} />
                <span className="nav-label">Activity History</span>
              </Link>
              <span className="nav-tooltip">Activity History</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link">
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
            
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'donor') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="/donorDashboard" className="nav-link" style={isDonorDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/donorAppointments" className="nav-link" style={isDonorAppointment ? active : {}}>
                <img src={AppointmentImage} />
                <span className="nav-label">Appointments</span>
              </Link>
              <span className="nav-tooltip">Appointments</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/donorDonations" className="nav-link" style={isDonorDonations ? active : {}}>
                <img src={donationsImage} />
                <span className="nav-label">Donations</span>
              </Link>
              <span className="nav-tooltip">Donations</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link">
                <img src={logout} />
                <span className="nav-label" style={{ cursor: 'pointer' }}>
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'hospital') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="" className="nav-link" style={isHospitalDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="" className="nav-link" style={isHospitalBloodRequests ? active : {}}>
                <img src={AppointmentImage} />
                <span className="nav-label">Blood Requests</span>
              </Link>
              <span className="nav-tooltip">Blood Requests</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/BloodCamp" className="nav-link" style={isHospitalBloodCamp ? active : {}}>
                <img src={donationsImage} />
                <span className="nav-label">Blood Camp</span>
              </Link>
              <span className="nav-tooltip">Blood Camp</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: 'pointer' }}>
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
              
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'phlebotomist') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="" className="nav-link" style={isPhlebotomistDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="" className="nav-link" style={isPhlebotomistBloodStatistics ? active : {}}>
                <img src={bloodStatisticsImage} />
                <span className="nav-label">Blood Statistics</span>
              </Link>
              <span className="nav-tooltip">Blood Statistics</span>
            </li>
            <li className="nav-item hidden">
              <Link to="" className="nav-link" style={isPhlebotomistReciveDonation ? active : {}}>
                <img src={donationsImage} />
                <span className="nav-label">Recieve Donation</span>
              </Link>
              <span className="nav-tooltip">Recieve Donation</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: 'pointer' }}>
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
              
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'bbm') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="/BBMDashboard" className="nav-link" style={isBBMDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/BBMBloodInventory" className="nav-link" style={isBBMBloodInventory ? active : {}}>
                <img src={bloodBankInventoryImage} />
                <span className="nav-label">Blood Inventory</span>
              </Link>
              <span className="nav-tooltip">Blood Inventory</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/BloodRequests" className="nav-link" style={isBBMBloodRequests ? active : {}}>
                <img src={bloodReqeustsImage} />
                <span className="nav-label">Blood Requests</span>
              </Link>
              <span className="nav-tooltip">Blood Requests</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/Donations" className="nav-link" style={isBBMDonations ? active : {}}>
                <img src={donationsImage} />
                <span className="nav-label">Donations</span>
              </Link>
              <span className="nav-tooltip">Donations</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: 'pointer' }}>
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
             
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'labTechnician') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="" className="nav-link" style={isLabTechnicianDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="/lTechBloodTest" className="nav-link" style={isLabTechnicianBloodTest ? active : {}}>
                <img src={eligibilityTestsImage} />
                <span className="nav-label">Blood Test</span>
              </Link>
              <span className="nav-tooltip">Blood Test</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: 'pointer' }}>
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
              
            </li>
          </ul>
        </nav>
      );
    } else if (userRole === 'volunteer') {
      return (
        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="" className="nav-link" style={isVolunteerDashboard ? active : {}}>
                <img src={dashboard} />
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item hidden">
              <Link to="" className="nav-link" style={isVolunteerBloodCamp ? active : {}}>
                <img src={donationsImage} />
                <span className="nav-label">Blood Camp</span>
              </Link>
              <span className="nav-tooltip">Blood Camp</span>
            </li>
          </ul>
          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: 'pointer' }}>
                <img src={logout} />
                <span className="nav-label">Logout</span>
              </a>
              
            </li>
          </ul>
        </nav>
      );
    }
  };

  /* useEffect(() => {
    userRoles(userRole);
  }, [userRole]); */

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
          className="header-logo"
        >
          <img src={logo} alt="lumina" />
          <span style={{ marginLeft: '10px', color: 'white', textDecoration: '' }}>Lumina</span>
        </a>
        <button className="toggler iconSidebar" onClick={(e) => handleToggler(e)}>
          <img src={menu} />
        </button>
      </header>
      {menuItems()}
    </aside>
  );
}
