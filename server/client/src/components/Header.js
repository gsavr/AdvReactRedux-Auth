import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Auth App
      </Link>
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
      <Link to="/signin" className="nav-link">
        Sign In
      </Link>
      <Link to="/signout" className="nav-link">
        Sign Out
      </Link>
      <Link to="/feature" className="nav-link">
        Click me
      </Link>
    </nav>
  );
};

export default Header;
