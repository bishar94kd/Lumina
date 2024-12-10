import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DonorDashboardPage from './pages/DonorDashboardPage';
import DonorAppointmentsPage from './pages/DonorAppointmentsPage';
import DonorDonationsPage from './pages/DonorDonationsPage';
import PhlebotomistRecieveDonationsPage from './pages/PhlebotomistRecieveDonationsPage';
import OTPVarification from './components/OTPVarificationComponent';
import TableComponent from './pages/TableComponent';
import DonorProfilePage from './pages/DonorProfilePage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BloodTestPage from './pages/BloodTestPage';
import EmployeeAccounts from './pages/Employee/EmployeeAccounts';
import Employee from './pages/Employee/Employee';
import EmployeeOne from './pages/Employee/AdminEmployee';
import AdminEmployee from './pages/Employee/AdminEmployee';
import PhlebotomistDashboard from './pages/Employee/PhlebotomistDashboard';
import Dashboard from './pages/BloodBankManager/Dashboard';
import BankInventory from './pages/BloodBankManager/BankInventory';
import BloodRequests from './pages/BloodBankManager/BloodRequests';
import Donations from './pages/BloodBankManager/Donations';
import BloodCamp from './pages/Hospital/BloodCamp';
import PhBloodStatistics from './pages/Phlebotomist/PhBloodStatistics';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/donorDashboard" element={<DonorDashboardPage />} />
          <Route path="/donorAppointments" element={<DonorAppointmentsPage />} />
          <Route path="/donorDonations" element={<DonorDonationsPage />} />
          <Route path="/PhlebotomistRecieveDonations" element={<PhlebotomistRecieveDonationsPage />} />
          <Route path="/otp" element={<OTPVarification />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/dprofile" element={<DonorProfilePage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          {/* Hirusha Lab Technician */}
          <Route path="/lTechBloodTest" element={<BloodTestPage />} />

          {/* Chamod Lab Technician */}
          <Route path="/employee" element={<Employee />} />
          <Route path="/PhlebotomistDashboard" element={<PhlebotomistDashboard />} />
          <Route path="/adminEmployee" element={<AdminEmployee />} />
          {/* Kavindi Blood Bank Manager */}
          <Route path="/BBMDashboard" element={<Dashboard/>} />
          <Route path="/BBMBloodInventory" element={<BankInventory/>} />
          <Route path="/BloodRequests" element={<BloodRequests/>} />
          <Route path="/Donations" element={<Donations/>} />
          {/* Kavindi Hospital */}
          <Route path="/BloodCamp" element={<BloodCamp/>} />
          {/* Kavindi Phlebotomist Blood Statistics */}
          <Route path="/PhlebotomistBloodStatistics" element={<PhBloodStatistics/>} />
          </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
