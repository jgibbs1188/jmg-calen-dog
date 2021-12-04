import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 className="navbar-brand">Calen-Dog</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Link className="nav-link active" aria-current="page" to="/dogs">
                Login
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
          </div>
        </div>
      </nav>
    </div>
  );
}
