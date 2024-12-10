import React, { useEffect, useState } from 'react';
import close from '../assets/icons/close.svg';

export default function ViewBloodTest({ setBloodTest, donationId }) {
    const [viewformData, setviewFormData] = useState({
        hiv1: false,
        hiv2: false,
        hepatitisB: false,
        hepatitisC: false,
        syphilis: false,
        malaria: false,
        hemoglobin: null, // Initialize as null
      });
    
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchLabTestDetails = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/v1/donation/get/${donationId}`);
            if (!response.ok) {
              throw new Error('Failed to fetch lab test details');
            }
            const data = await response.json();
    
            setviewFormData({
              hiv1: data.hiv1 || false,
              hiv2: data.hiv2 || false,
              hepatitisB: data.hepatitisB || false,
              hepatitisC: data.hepatitisC || false,
              syphilis: data.syphilis || false,
              malaria: data.malaria || false,
              hemoglobin: data.hemoglobin, // Set hemoglobin as true/false from API response
            });
    
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        if (donationId) {
          fetchLabTestDetails();
        }
      }, [donationId]);
    
    
      if (error) {
        return <div>Error: {error}</div>;
      }
  return (
    <div className="searchDonor" style={{height:"500px"}}>
    <div className="image"></div>
      <div className="search">
        <div className="exit" onClick={() => (setBloodTest(true))}>
          <img src={close} alt="closeImage" />
        </div>
        <p>Lab Test</p>
        <form id="searchDonor" >
          <div className="input">
          <div className="labtech-form-group">
              <p style={{textAlign:"left"}}>Infection</p>
              <div className="labtech-checkboxes">
              <label>
                  
                      <input
                          type="checkbox"
                          name="hiv1"
                          checked={viewformData.hiv1}
                          readOnly
                      />{' '}
                      <span>HIV</span>
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          name="hiv2"
                          checked={viewformData.hiv2}
                          readOnly
                      />{' '}
                      HIV 2
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          name="hepatitisB"
                          checked={viewformData.hepatitisB}
                          readOnly
                      />{' '}
                      Hepatitis B
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          name="hepatitisC"
                          checked={viewformData.hepatitisC}
                          readOnly
                      />{' '}
                      Hepatitis C
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          name="syphilis"
                          checked={viewformData.syphilis}
                          readOnly
                      />{' '}
                      Syphilis
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          name="malaria"
                          checked={viewformData.malaria}
                          readOnly
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
                          checked={viewformData.hemoglobin === 'accept'}
                          readOnly
                      />{' '}
                      Accept
                  </label>
                  <label>
                      <input
                          type="radio"
                          name="hemoglobin"
                          value="reject"
                          checked={viewformData.hemoglobin === 'reject'}
                          readOnly
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
}
