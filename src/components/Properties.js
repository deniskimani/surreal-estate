import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";
import SideBar from "./SideBar";
import Alert from "./Alert";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);
  const { search } = useLocation();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        setAlert({
          message: `${error}`,
          isSuccess: false,
        });
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then((response) => setProperties(response.data))
      .catch((error) => {
        setAlert({
          message: `${error}`,
          isSuccess: false,
        });
      });
  }, [search]);

  return (
    <div className="properties">
      <SideBar />

      <div className="properties-first-child">
        <h3>Available Properties</h3>
        <div className="alert-box">
          {alert.message && (
            <Alert message={alert.message} success={alert.isSuccess} />
          )}
        </div>
        <div className="property">
          {properties.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
