import { useState } from "react";
import Search from "./Search";

function Header({ changeSearch, toggleSorted, toggleForm }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search changeSearch={changeSearch} toggleSorted={toggleSorted}/>
      <button onClick={toggleForm}>Post Listing</button>
    </header>
  );
}

export default Header;
