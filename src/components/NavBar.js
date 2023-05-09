import { Link } from "react-router-dom";
import "../styles/navbar.css";
import FacebookLogin from "./FacebookLogin";

const NavBar = ({ userID, onLogin, onLogOut, setShowSpinner }) => {
  function loadTimer(param) {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(param);
    }, "800");
  }
  function onClick() {
    onLogOut();
    loadTimer(false);
  }
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
          <Link className="item" to="/" onClick={() => loadTimer(false)}>
            View Properties
          </Link>
        </li>
        {userID && (
          <li>
            <Link
              className="item"
              to="/saved-properties"
              onClick={() => loadTimer(false)}
            >
              Saved Properties
            </Link>
          </li>
        )}
        <li>
          <Link
            className="item"
            to="/add-property"
            onClick={() => loadTimer(false)}
          >
            Add Property
          </Link>
        </li>
      </ul>
      {userID.length === 0 && <FacebookLogin onLogin={onLogin} />}
      {userID && (
        <button type="submit" onClick={onClick} className="logout-btn">
          Sign Out
        </button>
      )}
    </div>
  );
};

export default NavBar;
