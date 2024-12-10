import { Link, useLocation } from 'react-router-dom';
import bellIcon from '../assets/icons/notification.svg';
import avatarIcon from '../assets/images/avatar.jpg';
import '../styles/TopBannerStyles.css';

function TopBannerComponent() {

  const location = useLocation();
  const isDonorProfile = location.pathname === "/dprofile";

  return (
    <>
      <div className="Alogin">
        <div className="login-info">
          <img id="bellIcon" src={bellIcon} alt="bellIcon" />
          <Link style={{color:"black",textDecorationLine:"none"}} to="/dprofile">
          <div className="profile">
            <div className="profile-info">
              <p className="title">Luna Deo</p>
              <p className="role">Donor</p>
            </div>
            <img src={avatarIcon} alt="profileImage" />
          </div></Link>
        </div>
      </div>
      <div className="welcome" style={isDonorProfile?{display:"none"}:{}}>
        <div className="welcomeImage"></div>
        <div className="welcomeMessage">
          <p className="messageHead">Welcome Donor!</p>
          <p className="messageBody">"Be the reason for someone's heartbeat"</p>
        </div>
      </div>
    </>
  );
}
export default TopBannerComponent;
