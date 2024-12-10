import { useEffect, useState } from 'react';
import DonorAppointmentsService from '../services/DonorAppointmentsService';
import ScheduleAppointmentComponent from '../components/ScheduleAppointmentComponent';
import SideMenuComponent from '../components/SidemenuComponent';
import TopBannerComponent from '../components/TopBannerComponent';

function DonorAppointmentsPage() {
  const [fetchedAppointments, setFetchedAppointments] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const appointment = true;

  const fetchAppointments = async () => {
    try {
      const response = await DonorAppointmentsService.findAppoinments();
      setFetchedAppointments(response.data);
      console.log('Succesfully Fetched');
    } catch (error) {
      console.error('Error Fetching Appointments', error);
    }
  };

  const deleteAppointment = async (appointmentID) => {
    try {
      const confirmed = window.confirm('Are you sure you want to delete ?');
      if (confirmed) {
        DonorAppointmentsService.deleteAppointment(appointmentID);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchAppointments();
  }, []);
  return (
    <>
      <div className="Amain">
        {window.innerWidth > 800 ? <SideMenuComponent userRole={'donor'} /> : null}
        {
          <div className="Aappointments" style={window.innerWidth > 800 ? {} : { padding: '0px' }}>
            {<TopBannerComponent />}

            <h1 >Appointments</h1>
            <div className="Aschedule">
              {buttonClicked === false ? (
                <>
                  <button onClick={setButtonClicked} className="AsaButton">
                    SCHEDULE APPOINTMENTS
                  </button>
                  {fetchedAppointments.length > 0 ? (
                    <>
                      <div className="D-leaderboard">
                        <table>
                          <tr style={{ textAlign: 'center' }} className="Ahead">
                            <th>Date</th>
                            <th>Time</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                          {fetchedAppointments.map((appoinment) => (
                            <tr style={{ textAlign: 'center' }} key={appoinment.id}>
                              <td>{appoinment.date}</td>
                              <td>{appoinment.time}</td>
                              <td>{appoinment.location}</td>
                              <td>{appoinment.status}</td>
                              <td onClick={() => deleteAppointment(appointment.id)} className="AdlButton">
                                <button>DELETE</button>
                              </td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="AnoAppoinments">
                        <p>Appoinments Does not exists </p>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="AsaContainer">
                  <ScheduleAppointmentComponent />
                </div>
              )}
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default DonorAppointmentsPage;
