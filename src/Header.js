import { HEADER_IMAGE_URL } from "./shared/constant";
import { useState } from "react";

const Header = ({ searchText }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="header">
      <div className="header-background-image">
        <img className="header-bg-img" src={HEADER_IMAGE_URL} />
      </div>
      <div className="header-brand">
        <span className="title">Dish Dive</span>
        <h2 className="description">
          Find recipes, articles, products and videos on the food you love
        </h2>
        <div className="search-bar">
          <input
            type="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              setSearchValue("");
              searchText(searchValue);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
