import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidemenuComponent from '../components/SidemenuComponent'
import TopBannerComponent from '../components/TopBannerComponent'
import { useNavigate } from 'react-router-dom';
import close from '../assets/icons/close.svg';
import '../styles/LabTestAddTest.css'
import ViewBloodTest from './ViewBloodTest';


export default function BloodTestPage() {
    // BLOOD TEST//
    const [data, setData] = useState([]);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showViewPopup, setShowViewPopup] = useState(false);
    const [selectedDonationId, setSelectedDonationId] = useState(null);

    const [isBloodTest,setBloodTest] = useState(true);
    const [isAddLabTest,setAddLabTest] = useState(false);
    const [isViewLabTest,setViewLabTest] = useState(true);
    const [isEditLabTest,setEditLabTest] = useState(false);

    // DUMMY DATA SET
    const dummyData = [
        {
          donationId: "D1234",
          collectionDate: "2024-12-01",
          amount: "500 ml",
          bloodType: "O+"
        },
        {
          donationId: "D1235",
          collectionDate: "2024-12-02",
          amount: "450 ml",
          bloodType: "A-"
        },
        {
          donationId: "D1236",
          collectionDate: "2024-12-03",
          amount: "500 ml",
          bloodType: "B+"
        },
        {
          donationId: "D1237",
          collectionDate: "2024-12-04",
          amount: "550 ml",
          bloodType: "AB+"
        }
      ];
      

    useEffect(() => {
        setData(dummyData);
        const fetchDonations = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/donation');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching donation data:', error);
            }
        };

        fetchDonations();
    }, []);

    const handleAddLabTestClick = (donationId) => {
        setBloodTest(false)
        setAddLabTest(true);
        setSelectedDonationId(donationId); 
    };

    const handleEditLabTestClick = (donationId) => {
        setSelectedDonationId(donationId); // Set the donationId when editing
        setShowEditPopup(true);
    };

    const handleViewLabTestClick = (donationId) => {
        setViewLabTest(true);
        setBloodTest(false)
        setSelectedDonationId(donationId); 
        setShowViewPopup(true);
    };

    const closePopup = () => {
        setShowAddPopup(false);
        setShowEditPopup(false);
        setShowViewPopup(false);
        setSelectedDonationId(null); // Reset the selected donationId
    };

    // ADD BLOOD TEST//
    const [formData, setFormData] = useState({
        hiv1: false,
        hiv2: false,
        hepatitisB: false,
        hepatitisC: false,
        syphilis: false,
        malaria: false,
        hemoglobin: '', // Accept or Reject as string
    });
    

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const preparedData = {
            labTestId: null,
            date: null,
            time: null,
            hemoglobin: formData.hemoglobin === 'accept',
            donorStatus: null,
            hepatitisB: formData.hepatitisB,
            hepatitisC: formData.hepatitisC,
            malaria: formData.malaria,
            syphilis: formData.syphilis,
            hiv1: formData.hiv1,
            hiv2: formData.hiv2,
            donation: {
                donationId: selectedDonationId, // Use donationId directly
            },
        };

        try {
            const response = await axios.post('http://localhost:8080/api/v1/labTest', preparedData);
            console.log('Lab Test added successfully:', response.data);
            bloodTestViewPage();
        } catch (error) {
            console.error('Error submitting lab test:', error);
        }
    };

    const navigate = useNavigate();
    const bloodTestViewPage = () => {
        navigate('/blood-test');
    };

    /* VIEW LAB TEST */
    


  return (
    <>
    <div className='D-main'>
        <SidemenuComponent userRole={'labTechnician'}/>
        {
            <div className='Aappointments'>
                <TopBannerComponent/>
                {isBloodTest?
                    <>
                <h1>Donations</h1>

                <div className="D-leaderboard" style={window.innerHeight<"1366px"?{ marginTop: '40px', height: '380px' }:{marginTop: '40px', height: '220px'}}>
                  <table>
                    <tr style={{ textAlign: 'center' }} className="Ahead">
                    <th>Donation ID</th>
                    <th>Collection Date</th>
                    <th>Amount</th>
                    <th>Blood Type</th>
                    <th>Action</th>
                    </tr>
                    {data.length > 0 ? (
                      data.map((row) => (
                        <tr style={{ textAlign: 'center' }}>
                          <td>{row.donationId}</td>
                            <td>{row.collectionDate}</td>
                            <td>{row.amount}</td>
                            <td>{row.bloodType}</td>
                          <td className="AdlButton">
                            <button onClick={() => handleAddLabTestClick(row.donationId)} style={{ padding: '4px 20px',marginLeft:"10px"}}>
                              CREATE
                            </button>
                            <button onClick={() => handleViewLabTestClick(row.donationId)} style={{ padding: '4px 20px',marginLeft:"10px"}}>
                              VIEW
                            </button>
                            <button onClick={() => handleEditLabTestClick(row.donationId)} style={{ padding: '4px 20px',marginLeft:"10px"}}>
                              EDIT
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                    <tr>
                        <td colSpan="5" className="text-center">No Data Available</td>
                    </tr>
                    )}
                  </table>
                </div>
              </>
                :isAddLabTest?(
                    <div className="searchDonor" style={{height:"500px"}}>
              <div className="image"></div>
                <div className="search">
                  <div className="exit" onClick={() => (closePopup,setBloodTest(true))}>
                    <img src={close} alt="closeImage" />
                  </div>
                  <p>Lab Test</p>
                  <form id="searchDonor" onSubmit={handleSubmit}>
                    <div className="input">
                    <div className="labtech-form-group">
                        <p style={{textAlign:"left"}}>Infection</p>
                        <div className="labtech-checkboxes">
                        <label>
                            
                                <input
                                    type="checkbox"
                                    name="hiv1"
                                    checked={formData.hiv1}
                                    onChange={handleChange}
                                />{' '}
                                <span>HIV</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="hiv2"
                                    checked={formData.hiv2}
                                    onChange={handleChange}
                                />{' '}
                                HIV 2
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="hepatitisB"
                                    checked={formData.hepatitisB}
                                    onChange={handleChange}
                                />{' '}
                                Hepatitis B
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="hepatitisC"
                                    checked={formData.hepatitisC}
                                    onChange={handleChange}
                                />{' '}
                                Hepatitis C
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="syphilis"
                                    checked={formData.syphilis}
                                    onChange={handleChange}
                                />{' '}
                                Syphilis
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="malaria"
                                    checked={formData.malaria}
                                    onChange={handleChange}
                                />{' '}
                                Malaria
                            </label>
                        </div>
                    </div>
                    </div>
                    <div id='hemoglobinGrop' className="labtech-form-group">
                        <p style={{textAlign:"left",marginTop:"20px"}}>Hemoglobin</p>
                        <div className="labtech-checkboxes" id='hemoglobin'>
                            <label>
                                <input
                                    type="radio"
                                    name="hemoglobin"
                                    value="accept"
                                    checked={formData.hemoglobin === 'accept'}
                                    onChange={handleChange}
                                />{' '}
                                Accept
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="hemoglobin"
                                    value="reject"
                                    checked={formData.hemoglobin === 'reject'}
                                    onChange={handleChange}
                                />{' '}
                                Reject
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="AsaSubmit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
                )
                
                :isEditLabTest?
                <p>hello</p>
                
                :isViewLabTest?<ViewBloodTest setBloodTest={setBloodTest} donationId={selectedDonationId}/>:null}
            </div>
        }
    </div>
    </>
  )
}
