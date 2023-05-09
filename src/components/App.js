import { useState } from "react";
/* eslint-disable import/no-duplicates */
import { Route, Routes } from "react-router-dom";
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
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

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
  faStar
);

const App = () => {
  const initialState = {
    userID: "",
    response: {},
  };
  const [userID, setUserID] = useState(initialState.userID);
  const [response, setResponse] = useState(initialState.response);

  const handleLogin = (params) => {
    setUserID(params.userID);
    setResponse(params);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
  };
  return (
    <div className="App">
      <NavBar userID={userID} onLogin={handleLogin} onLogOut={handleLogout} />
      <Routes>
        <Route element={<Properties userID={userID} />} path="/" />
        <Route element={<AddProperties />} path="/add-property" />
      </Routes>
    </div>
  );
};

export default App;
