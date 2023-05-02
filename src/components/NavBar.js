import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img
          src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
          alt="logo"
        />
      </Link>
      <ul className="links">
        <li>
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li>
          <Link className="item" to="/add-property">
            Add Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
