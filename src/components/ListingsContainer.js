import ListingCard from "./ListingCard";

function ListingsContainer({ listings, delListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            delListing={delListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
