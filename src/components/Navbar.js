import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

export default function Navbar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {user ? (
            <h2 className="navbar-brand">
              <Link className="nav-link active" aria-current="page" to="/">
                Calen-Dog
              </Link>
            </h2>
          ) : (
            <h2 className="navbar-brand">Calen-Dog</h2>
          )}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {user ? (
              <div className="navbar-nav">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/dogs"
                >
                  Dogs
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Login
                </Link>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

Navbar.defaultProps = {
  user: {},
};
