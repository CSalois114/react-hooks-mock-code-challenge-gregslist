import { useState } from "react";

function Search({ changeSearch, toggleSorted }) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    changeSearch(search.toLowerCase());
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <button onClick={toggleSorted} >Sort By Location</button>
    </form>
  );
}

export default Search;
