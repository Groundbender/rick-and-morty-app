import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="mt-2 mb-5">
      <Link to="/" className="text-decoration-none">
        <h1
          className="ubuntu text-center text-black "
          style={{ cursor: "pointer" }}
        >
          Rick & Morty <span className="text-primary">Wiki</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
