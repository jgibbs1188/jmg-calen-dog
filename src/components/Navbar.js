import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignOutButton from './SignOutButton';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  column-gap: 10px;
`;

const PageNameStyle = styled.h2`
  margin-top: 8px;
`;

export default function Navbar({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {user ? (
            <PageNameStyle className="navbar-brand">
              <Link
                className="btn btn-outline-primary"
                aria-current="page"
                to="/"
              >
                Calen-Dog
              </Link>
            </PageNameStyle>
          ) : (
            <h2 className="navbar-brand">Calen-Dog</h2>
          )}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {user ? (
              <>
                <NavContainer className="navbar-nav">
                  <Link
                    className="btn btn-outline-info"
                    aria-current="page"
                    to="/new"
                  >
                    Create a New Doggo
                  </Link>
                  <Link
                    className="btn btn-outline-info"
                    aria-current="page"
                    to="/dogs"
                  >
                    Dogs
                  </Link>
                  {/* <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </Link> */}
                </NavContainer>
                <div>
                  <SignOutButton />
                </div>
              </>
            ) : (
              <div className="navbar-nav">
                <Link
                  className="btn btn-outline-info"
                  aria-current="page"
                  to="/"
                >
                  Login
                </Link>
                {/* <Link
                  className="btn btn-outline-info"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link> */}
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
