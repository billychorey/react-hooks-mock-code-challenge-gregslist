import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data); // Set both listings and filteredListings initially
        setFilteredListings(data);
      });
  }, []);

  const onSearch = (searchText) => {
    const filteredListings = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListings(filteredListings); // Update filteredListings
  }

  return (
    <div className="app">
      <Header onSearch={onSearch} />
      <ListingsContainer filteredListings={filteredListings} /> {/* Pass filteredListings */}
    </div>
  );
}

export default App;
