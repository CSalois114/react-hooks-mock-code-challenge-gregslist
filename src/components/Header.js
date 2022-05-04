import Search from "./Search";

function Header({ changeSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search changeSearch={changeSearch} />
    </header>
  );
}

export default Header;
