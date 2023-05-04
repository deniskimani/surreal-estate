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
  faEnvelope
);

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<Properties />} path="/" />
        <Route element={<AddProperties />} path="/add-property" />
      </Routes>
    </div>
  );
};

export default App;
