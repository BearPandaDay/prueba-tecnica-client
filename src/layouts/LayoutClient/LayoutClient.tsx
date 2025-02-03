import "./LayoutClient.scss";
import image from "../../assets/png/logoav.png";
import { useAuth } from  "../../hooks";

export function LayoutClient({children}) {
  const { logout } = useAuth();
  
  const funLogout = () => {
    logout();
    window.location.href = "/";
  }
  
  return (
    <div className="father-content">
      <div className="siderbar">
        <img src={image} alt="image" className="logo" />
        <div className="menu">
          <a href="/user/home" className="menuin">Mi Location</a>
          <a href="/user/nearbyrestaurants" className="menuin">Nearby restaurants</a>
          <a href="/" className="menuin">Label 1</a>
          <a href="/" className="menuin">Label 1</a>
          <a href="/" className="menuin">Label 1</a>
        </div>
      </div>
      <div          >
        <div className="topbar">
          <div className="topbar-left">PRUEBA TECNICA</div>
          <div className="topbar-right">
            <button className="close-button" onClick={funLogout}>Logout</button>
          </div>
        </div>
        <div className="content-children">
          {children}
        </div>
      </div>
    </div>
  )
}
