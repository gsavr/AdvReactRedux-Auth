import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import "../css/header.css";

const Header = ({ authenticated }) => {
  const renderHeaderLinks = () => {
    if (!authenticated) {
      return (
        <Dropdown>
          <Dropdown.Toggle id="dropdown" as={Link} to="#" className="nav-link">
            Login
          </Dropdown.Toggle>

          <Dropdown.Menu variant="light">
            <Dropdown.Item as={Link} to="/signin" className="nav-link">
              Sign In
            </Dropdown.Item>
            {/* <Dropdown.Divider /> */}
            <Dropdown.Item as={Link} to="/signup" className="nav-link">
              Register
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
