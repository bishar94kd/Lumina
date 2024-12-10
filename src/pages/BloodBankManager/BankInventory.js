import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/BBM/BankInventory.css'; 
import TopBannerComponent from '../../components/TopBannerComponent';
import SidemenuComponent from '../../components/SidemenuComponent';

const BankInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://url') /*url eka*/
      .then(response => {
        setInventory(response.data); 
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch inventory data.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="D-main">
        <SidemenuComponent userRole={'bbm'} />
        {
          <div className="Aappointments">
            <TopBannerComponent />
            <div className='bankinventory-container'>
              <h3>Bank Inventory</h3>

              <div className="main-content">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p className="error-message">{error}</p>
                ) : (
                  <section className="bank-inventory">  
                    <table>
                      <thead>
                        <tr>
                          <th>Blood Type</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inventory.map((item, index) => (
                          <tr key={index}>
                            <td>{item.bloodType}</td>
                            <td>{item.quantity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>
                )}
              </div>
            </div>   
          </div>
        }
      </div>
    </>
  );
}

export default BankInventory;
