import { Route, Routes } from "react-router-dom";
import "../styles/app.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperties";

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
