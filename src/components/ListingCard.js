import { useState } from "react";

function ListingCard({ listing, delListing }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={() => delListing(listing)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
