import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <h4>Cities</h4>
      <Link to={`/?query={"city": "Exeter"}`}>Exeter</Link>
      <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to="/">All cities</Link>
    </div>
  );
};

export default SideBar;
