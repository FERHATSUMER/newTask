import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <a href="/#" className="movie-marker">
        Movie Marker
      </a>
      <a href="/#" className="add-movie">
        Add Movie
      </a>
    </div>
  );
}

export default Header;
