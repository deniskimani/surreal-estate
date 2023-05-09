import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/side-bar.css";
import QueryString from "qs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ setShowSpinner }) => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

  function loadTimer(param) {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(param);
    }, "800");
  }

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = QueryString.parse(search, {
      ignoreQueryPrefix: true,
    });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return QueryString.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };
  return (
    <div className="side-bar">
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={handleInput} />
        <button type="submit">
          <FontAwesomeIcon icon="search" className="icons" />
        </button>
      </form>
      <h4>Filter by city</h4>
      <Link
        to={buildQueryString("query", { city: "Exeter" })}
        onClick={() => loadTimer(false)}
      >
        Exeter
      </Link>
      <Link
        to={buildQueryString("query", { city: "Leeds" })}
        onClick={() => loadTimer(false)}
      >
        Leeds
      </Link>
      <Link
        to={buildQueryString("query", { city: "Manchester" })}
        onClick={() => loadTimer(false)}
      >
        Manchester
      </Link>
      <Link to="/" onClick={() => loadTimer(false)}>
        All cities
      </Link>

      <h4>Sort By</h4>
      <Link
        to={buildQueryString("sort", { price: 1 })}
        onClick={() => loadTimer(false)}
      >
        Price Ascending
      </Link>
      <Link
        to={buildQueryString("sort", { price: -1 })}
        onClick={() => loadTimer(false)}
      >
        Price Descending
      </Link>
    </div>
  );
};

export default SideBar;
