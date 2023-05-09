import { useEffect, useState } from "react";
import "../styles/saved-properties.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "./Alert";

const SavedProperties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
    savedProperties: [],
  };
  const [savedProperties, setSavedProperties] = useState(
    initialState.savedProperties
  );
  const [alert, setAlert] = useState(initialState.alert);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/Favourite?populate=propertyListing")
      .then((response) => {
        setSavedProperties(response.data);
      })
      .catch((error) => {
        setAlert({
          message: `${error}`,
          isSuccess: false,
        });
      });
  }, [savedProperties]);
  const handleDeleteProperty = (param) => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${param}`).then(
      setAlert({
        message: "Property removed from favourites",
        isSuccess: true,
      })
    );
  };
  return (
    <div className="saved-properties">
      <h3>Favourites</h3>
      {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
      )}
      <ul>
        {savedProperties.map((property) => (
          <li className="saved-property" key={property._id}>
            {property.propertyListing.title}
            <button
              type="button"
              onClick={() => handleDeleteProperty(property._id)}
            >
              Remove
              <FontAwesomeIcon icon="trash" className="trash" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedProperties;
