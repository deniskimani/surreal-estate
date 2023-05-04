import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fort from "../assets/fort-awesome.svg";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  bathrooms,
  bedrooms,
  city,
  type,
  email,
  price,
}) => {
  return (
    <div className="property-card">
      <div className="card-img">
        <img src={fort} alt="property" />
      </div>
      <div className="property-info">
        <h4>{title}</h4>
        <p className="italics">
          {type} - {city}
        </p>
        <p>
          <FontAwesomeIcon icon="bath" /> {bathrooms}
        </p>
        <p>
          <FontAwesomeIcon icon="bed" /> {bedrooms}
        </p>
        <p>
          <FontAwesomeIcon icon="sterling-sign" /> {price}
        </p>
        <button
          type="submit"
          onClick={() => {
            window.location.href = `mailto:${email}`;
          }}
          className="btn"
        >
          <FontAwesomeIcon icon="envelope" className="icons" /> Email
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
