import { useState } from "react";
/* eslint-disable import/no-duplicates */
import { Navigate, Route, Routes } from "react-router-dom";
import "../styles/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faB, faR } from "@fortawesome/free-solid-svg-icons";
import {
  faCoffee,
  faBed,
  faShower,
  faBath,
  faSterlingSign,
  faEnvelope,
  faFilter,
  faSearch,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperties";
import SavedProperties from "./SavedProperties";
import Loader from "./Loader";

library.add(
  faB,
  faR,
  faCoffee,
  faBed,
  faBath,
  faShower,
  faSterlingSign,
  faEnvelope,
  faFilter,
  faSearch,
  faStar,
  faTrash
);

const App = () => {
  const initialState = {
    userID: "",
    showSpinner: true,
  };
  const [userID, setUserID] = useState(initialState.userID);
  const [showSpinner, setShowSpinner] = useState(initialState.showSpinner);

  setTimeout(() => {
    setShowSpinner(false);
  }, "1300");
  const handleLogin = (params) => {
    setUserID(params.userID);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };
  return (
    <div className="App">
      <NavBar
        userID={userID}
        onLogin={handleLogin}
        setShowSpinner={setShowSpinner}
        onLogOut={handleLogout}
      />
      <Loader showSpinner={showSpinner} />
      <Routes>
        <Route
          element={
            <Properties setShowSpinner={setShowSpinner} userID={userID} />
          }
          path="/"
        />
        <Route element={<AddProperties />} path="/add-property" />
        <Route
          element={
            userID.length < 1 ? <Navigate to="/" /> : <SavedProperties />
          }
          path="/saved-properties"
        />
      </Routes>
    </div>
  );
};

export default App;
