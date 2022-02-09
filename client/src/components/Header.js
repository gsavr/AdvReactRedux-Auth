import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/header.css";

const Header = ({ authenticated }) => {
  const renderHeaderLinks = () => {
    if (!authenticated) {
      return (
        <div className="header">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </div>
      );
    }
    if (authenticated) {
      return (
        <div className="header">
          <Link to="/feature" className="nav-link">
            Click me
          </Link>
          <Link to="/signout" className="nav-link">
            Sign Out
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className="nav header">
      <Link to="/" className="nav-link">
        Auth App
      </Link>
      {renderHeaderLinks()}
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { authenticated: auth.authenticated };
};

export default connect(mapStateToProps)(Header);
