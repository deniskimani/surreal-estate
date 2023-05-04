import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/side-bar.css";
import QueryString from "qs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

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
      <Link to={buildQueryString("query", { city: "Exeter" })}>Exeter</Link>
      <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      <Link to={buildQueryString("query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link to="/">All cities</Link>

      <h4>Sort By</h4>
      <Link to={buildQueryString("sort", { price: 1 })}>Price Ascending</Link>
      <Link to={buildQueryString("sort", { price: -1 })}>Price Descending</Link>
    </div>
  );
};

export default SideBar;
