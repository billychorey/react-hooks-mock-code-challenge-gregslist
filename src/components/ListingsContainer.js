import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({filteredListings}) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);
  useEffect(() => {
    if (filteredListings && filteredListings.length > 0) {
      setListings(filteredListings);
    } else {
      // Handle the case where filteredListings is empty or undefined
      // You can choose to set an empty array or handle it differently based on your requirements
      setListings([]);
    }
  }, [filteredListings]);

  

  

  function handleDeleteItem(deletedItemId) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedItemId);
    setListings(updatedListings);
  }

  return (
    <main>
      <ul className="cards">
        {/* Use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard 
            onDeleteItem={handleDeleteItem}
            key={listing.id}
            description={listing.description}
            image={listing.image}
            location={listing.location}
            id={listing.id}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
