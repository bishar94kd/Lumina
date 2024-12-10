import React, { useState } from 'react';
import '../styles/PhlebotomistRecieveDonationsStyles.css';
import close from '../assets/icons/close.svg';
import '../styles/FormStyles.css';
import SideMenuComponent from '../components/SidemenuComponent';
import TopBannerComponent from '../components/TopBannerComponent';
import RecieveDonationSearchService from '../services/RecieveDonationSearchService';
import RecieveDonationEligibilityTestService from '../services/RecieveDonationEligibilityTestService';
import PhlebotomistDonationProcessService from '../services/PhlebotomistDonationProcessService';

function PhlebotomistRecieveDonationsPage() {
  /* Donation Process */
  const [donorId, setDonorId] = useState('');
  const [barcode, setBarcode] = useState('');
  const [amount, setAmout] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [donation, setDonation] = useState([]);

  const submitDonation = (e) => {
    e.preventDefault();
    try {
      const donations = { donorId, barcode, amount, startTime, endingTime };
      setDonation(donations);
      PhlebotomistDonationProcessService.saveDonationProcess(donation);
    } catch (error) {
      alert('There is an error in Donation Submition');
      console.log('There is an error in Donation Submition', error);
    }

    return;
  };

  const setDonationProcessCancel = () => {
    const confirmed = window.confirm('Are you sure you want to proceed cancelation?');
    if (confirmed) {
      setSearch('');
    }
  };

  /* Eligibility testing */

  const [answers, setAnswers] = useState([]);
  const [PassedTheTest, setPassedTheTest] = useState(false);
  const [qOne, setQOne] = useState(false);
  const [qTwo, setQTwo] = useState(false);
  const [qThree, setQThree] = useState(false);
  const [qFour, setQFour] = useState(false);
  const [qFive, setQFive] = useState(false);
  const [qSix, setQSix] = useState(false);
  const [qSeven, setQSeven] = useState(false);
  const [qEight, setQEight] = useState(false);

  const setEligibilityTestApprove = () => {
    setAnswers({ qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight });
    try {
      RecieveDonationEligibilityTestService.setEligibilityTestResult(answers);
      alert('Succesfully Done');
      setPassedTheTest(true);
    } catch (error) {
      setPassedTheTest(true);
      alert('Failed to do the test, Refresh the browser and retry');
      console.log('There is an error in saving answers into the database', error);
    }
    return;
  };

  const setEligibilityTestReject = () => {
    setAnswers({ qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight });
    try {
      RecieveDonationEligibilityTestService.setEligibilityTestResult(answers);
      alert('Rejected');
      setSearch('');
    } catch (error) {
      setSearch('');
      alert('Failed to do the test, Refresh the browser and retry');
      console.log('There is an error in saving answers into the database', error);
    }
    return;
  };

  /*   const checkUncheck = (Question) => {
    if (Question.id === 'qTwo') {
      if (qTwo === true) {
        setQTwo(false);
      } else {
        setQTwo(true);
      }
    }
  }; */

  /* Recieve Donation */

  const [search, setSearch] = useState('');
  const [searchedDonor, setSearchedDonor] = useState([]);

  const SearchDonor = (event) => {
    if (search !== '') {
      try {
        const response = RecieveDonationSearchService.getSearchedDonor(search);
        setSearchedDonor(response.data);
        setEnableSearch(false);
      } catch (error) {
        alert('A Donation Appoinment Does Not Exists');
        // Needs to be removed
        setSearchedDonor('holla');
        setEnableSearch(false);
      }
    }
    return;
  };

  const setElegibilityTestCancel = () => {
    const confirmed = window.confirm('Are you sure you want to proceed cancelation?');
    if (confirmed) {
      setSearch('');
      setQOne(false);
      setQTwo(false);
      setQThree(false);
      setQFour(false);
      setQFive(false);
      setQSix(false);
      setQSeven(false);
      setQEight(false);
    }
  };

  const EnableSearching = () => {
    if (enableSearch === true) {
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
    }
  };

  const [enableSearch, setEnableSearch] = useState(false);

  const donors = [
    { date: '2024-10-01', time: '10:00 AM', location: 'Colombo', status: 'Pending' },
    { date: '2024-10-02', time: '11:00 AM', location: '13,1/kandepola,buluwala,Kurunegala', status: 'Completed' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
    { date: '2024-10-03', time: '09:30 AM', location: 'Galle', status: 'Pending' },
  ];

  return (
    <>
      <div className="Amain">
        <SideMenuComponent userRole={'phlebotomist'} />
        <div className="Aappointments">
          <TopBannerComponent />
          {PassedTheTest ? (
            <>
              <h1>Donation Process</h1>
              <form>
                <div className="Main-form phlebotomist" style={{ width: '500px' }}>
                  <div className="qBox">
                    <input
                      autoComplete="off"
                      placeholder="Donor ID"
                      required
                      type="text"
                      value={searchedDonor.userID}
                      onChange={(e) => setDonorId(e.target.value)}
                      id="donorId"
                      name="donorId"
                      disabled
                    />
                  </div>
                  <div className="qBox">
                    <input
                      autoComplete="off"
                      placeholder="Barcode"
                      required
                      type="text"
                      value={barcode}
                      onChange={(e) => setBarcode(e.target.value)}
                      id="barcode"
                      name="barcode"
                    />
                  </div>
                  <div className="qBox">
                    <input
                      autoComplete="off"
                      placeholder="Amount of Blood"
                      required
                      type="number"
                      minLength={0}
                      value={amount}
                      onChange={(e) => setAmout(e.target.value)}
                      id="amount"
                      name="amount"
                    />
                    <span style={{color:"white"}}>ml</span>
                  </div>
                  <div className="qBox">
                    <input
                      autoComplete="off"
                      placeholder="Starting Time"
                      required
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      id="startTime"
                      name="startTime"
                    />
                  </div>
                  <div className="qBox">
                    <input
                      autoComplete="off"
                      placeholder="Ending Time"
                      required
                      type="time"
                      value={endingTime}
                      onChange={(e) => setEndingTime(e.target.value)}
                      id="endingTime"
                      name="endingTime"
                    />
                  </div>

                  <div className="buttons">
                    <button className="AsaSubmit" onClick={(e) => submitDonation(e)}>
                      SUBMIT
                    </button>
                    <button className="AsaSubmit" onClick={() => setDonationProcessCancel()}>
                      CANCEL
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : search === '' ? (
            <>
              <h1>Recieve Donation</h1>
              <div className="Aschedule">
                <button onClick={() => EnableSearching()} class="AsaButton">
                  RECIEVE BLOOD
                </button>
                <div className="D-leaderboard" style={{height:"250px"}}>
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
                            <button style={{ padding: '4px 40px' }}>EDIT</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No donors availabel</p>
                    )}
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Eligibility Test</h1>
              <form>
                <div className="Main-form" style={{ height: '330px', overflow: 'auto' , padding:"20px" }}>
                  <div className="trueFalse">
                    <button
                      type="button"
                      onClick={(e) => setElegibilityTestCancel(e)}
                      className="AsaSubmit"
                    >
                      CANCEL
                    </button>
                    <p>
                      True(Check) / <br></br>False(Default)
                    </p>
                  </div>
                  <div className="qBox">
                    <label for="qOne">Do you have AIDS, syphilis, or any sexually transmitted diseases?</label>
                    <input
                      type="checkbox"
                      checked={qOne}
                      onChange={(e) => setQOne(e.target.checked)}
                      id="qOne"
                      name="qOne"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qTwo">Is your sexual relationship limited to one person?</label>
                    <input
                      type="checkbox"
                      checked={qTwo}
                      onClick={(e) => setQTwo(e.target.checked)}
                      id="qTwo"
                      name="qTwo"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qThree">
                      Have you worked in the sex industry or engaged in sex work in the past 12 months?
                    </label>
                    <input
                      type="checkbox"
                      checked={qThree}
                      onChange={(e) => setQThree(e.target.checked)}
                      id="qThree"
                      name="qThree"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qFour">Have you ever engaged in homosexual relations? </label>
                    <input
                      type="checkbox"
                      checked={qFour}
                      onChange={(e) => setQFour(e.target.checked)}
                      id="qFour"
                      name="qFour"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qFive">Have you ever used drugs intravenously?</label>
                    <input
                      type="checkbox"
                      checked={qFive}
                      onChange={(e) => setQFive(e.target.checked)}
                      id="qFive"
                      name="qFive"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qSix">
                      Are you or your partner suspected of having AIDS or another sexually transmitted disease?
                    </label>
                    <input
                      type="checkbox"
                      checked={qSix}
                      onChange={(e) => setQSix(e.target.checked)}
                      id="qSix"
                      name="qSix"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qSeven">
                      Do you or your partner belong to any of the above categories (AIDS, syphilis, drug use, etc.)?
                    </label>
                    <input
                      type="checkbox"
                      checked={qSeven}
                      onChange={(e) => setQSeven(e.target.checked)}
                      id="qSeven"
                      name="qSeven"
                    />
                  </div>
                  <div className="qBox">
                    <label for="qEight">
                      Do you or your partner belong to any of the above categories (AIDS, syphilis, drug use, etc.)?
                    </label>
                    <input
                      type="checkbox"
                      checked={qEight}
                      onChange={(e) => setQEight(e.target.checked)}
                      id="qEight"
                      name="qEight"
                    />
                  </div>

                  <div style={{ position: 'sticky', bottom: 0 }} className="buttons">
                    <button type="button" className="AsaSubmit" onClick={() => setEligibilityTestApprove()}>
                      APPROVE
                    </button>
                    <button type="button" className="AsaSubmit" onClick={() => setEligibilityTestReject()}>
                      REJECT
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}

          {enableSearch === true ? (
            <>
              <div className="searchDonor">
              <div className="image"></div>
                <div className="search">
                  <div className="exit" onClick={() => EnableSearching()}>
                    <img src={close} alt="closeImage" />
                  </div>
                  <p>Search Donor</p>
                  <form id="searchDonor">
                    <div className="input">
                      <input
                        autoComplete="off"
                        placeholder="Donor ID / NIC / Username"
                        type="text"
                        key="search"
                        required
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <button onClick={(e) => SearchDonor(e)} className="AsaSubmit">
                      SEARCH
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default PhlebotomistRecieveDonationsPage;