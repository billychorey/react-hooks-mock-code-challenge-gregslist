import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDeleteItem }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteClassName = isFavorite
    ? "emoji-button favorite active"
    : "emoji-button favorite";

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          // Successful deletion, you can update the UI here if needed
          // For example, you can call a callback function to inform the parent component
          onDeleteItem(id);
        } else {
          // Handle error (e.g., non-200 status codes) here
          console.error("Failed to delete listing");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
    


    
  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className={favoriteClassName} onClick={toggleFavorite}>
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
