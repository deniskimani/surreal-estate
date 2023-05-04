import { Link, useLocation } from "react-router-dom";
import "../styles/side-bar.css";
import QueryString from "qs";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = QueryString.parse(search, {
      ignoreQueryPrefix: true,
    });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return QueryString.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="side-bar">
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
