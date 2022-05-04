import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  let [listings, setListings] = useState([]);
  const [searchBy, setSearchBy] = useState("");

  // get listings from db
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res) => res.json())
    .then(setListings);
  }, []);
  
  const changeSearch = (newSearch) => setSearchBy(newSearch);
  const delListing = (delListing) => {
    fetch(`http://localhost:6001/listings/${delListing.id}`,
    { method: "DELETE"})
    .then(res => res.json())
    .then(data => { if(typeof data === 'object' && !Object.keys(data)[0]) {
      setListings(listings.filter(listing => listing !== delListing))
    }})  
  }
  
  // If there is a search term entered filter listings by it
  searchBy && (listings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchBy)
  ));

  return (
    <div className="app">
      <Header changeSearch={changeSearch} />
      <ListingsContainer listings={listings} delListing={delListing} />
    </div>
  );
}

export default App;
