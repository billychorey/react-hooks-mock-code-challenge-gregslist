import React, { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(e) {
    console.log('submit')
    e.preventDefault();
    onSearch(searchText);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
