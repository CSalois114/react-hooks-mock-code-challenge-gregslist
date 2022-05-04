import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  let [listings, setListings] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [isNewForm, setIsNewForm] = useState(false);

  // get listings from db
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then(setListings);
  }, []);

  const toggleForm = () => setIsNewForm(!isNewForm);
  const toggleSorted = () => setIsSorted(!isSorted);
  const changeSearch = (newSearch) => setSearchBy(newSearch);
  const delListing = (delListing) => {
    fetch(`http://localhost:6001/listings/${delListing.id}`, 
      {method: "DELETE"}
      )
      .then((res) => res.json())
      .then((data) => {
        if (typeof data === "object" && !Object.keys(data)[0]) {
          setListings(listings.filter((listing) => listing !== delListing));
        }
      });
  };
  const postListing = (newListing) => {
    fetch("http://localhost:6001/listings",
    {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newListing)})
      .then((res) => res.json())
      .then(postedListing => setListings([...listings, postedListing]));
  }

  // If there is a search term entered filter listings by it and sort if needed
  searchBy &&
    (listings = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchBy)
    ));
  isSorted && listings.sort((a, b) => a.location.localeCompare(b.location));

  return (
    <div className="app">
      <Header
        changeSearch={changeSearch}
        toggleSorted={toggleSorted}
        toggleForm={toggleForm}
      />
      {isNewForm ? <NewListingForm postListing={postListing}/> : null}
      <ListingsContainer listings={listings} delListing={delListing} />
    </div>
  );
}

export default App;
