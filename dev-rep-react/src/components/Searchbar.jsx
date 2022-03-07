import React, { useState } from "react";

const Navbar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
    handleSearch("");
  };
  return (
    <div className="contentContainer">
      <div className="searchContainer">
        <label htmlFor="query">Search Repository:</label>
        <input
          value={query}
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          name="query"
          id="query"
        />
        <div className="btns">
          <button onClick={() => handleSearch(query)} className="btn">
            Search
          </button>
          <button onClick={handleClear} className="btn">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
