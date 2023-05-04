import { useState } from "react";
import "../styles/add-property.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperties = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bathrooms: "",
      bedrooms: "",
      email: "",
      price: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });

    axios
      .post("http://localhost:3000/api/v1/PropertyListing", {
        ...fields,
      })
      .then((response) => {
        if (response.status === 201) {
          setAlert({ message: "Property added!", isSuccess: true });
        }
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      <h3>Add a property</h3>
      <div className="add-property-child">
        {alert.message && (
          <Alert message={alert.message} success={alert.isSuccess} />
        )}

        <form onSubmit={handAddProperty}>
          <div className="left-panel">
            <label htmlFor="title">
              Title:
              <input
                placeholder="3 bed flat"
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                placeholder="Email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
            <label htmlFor="price">
              Price:
              <input
                placeholder="900"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
            <label htmlFor="city">
              City:
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Exeter">Exeter</option>
              </select>
            </label>
          </div>
          <div className="right-panel">
            <label htmlFor="bathrooms">
              Bathrooms:
              <input
                placeholder="2"
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
            <label htmlFor="bedrooms">
              Bedrooms:
              <input
                placeholder="3"
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
            <label htmlFor="type">
              Type:
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperties;
