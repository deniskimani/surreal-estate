import spinner from "../assets/spinner.gif";
import "../styles/loader.css";

const Loader = ({ showSpinner }) => {
  return (
    <div className={`${showSpinner ? "loader" : "hidden"}`}>
      <div className="loader-img">
        <img src={spinner} alt="spinner" />
      </div>
    </div>
  );
};

export default Loader;
