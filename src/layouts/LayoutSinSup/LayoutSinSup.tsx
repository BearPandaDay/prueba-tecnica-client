import "./LayoutSinSup.scss";
import image from "../../assets/png/logoav.png"

export function LayoutSinSup({children}) {
  return (
    <div className="father-layoutsinsup-content">
      <div className="layoutsinsup-content">
        <div className="layoutsinsup-content__logo-sign">
          <img className="layoutsinsup-content__logo-sign__img-logo" src={image} />
        </div>
        <div className="layoutsinsup-content__logo-sign" 
          style={{justifyContent: "start"}}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
