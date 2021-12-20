import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h3>
        Welcome! Please use the links below to view your current list of dogs or
        to create a new dog!
      </h3>
      <br />
      <Link className="nav-link active" aria-current="page" to="/new">
        Create a New Doggo
      </Link>
      <Link className="nav-link active" aria-current="page" to="/dogs">
        Dogs
      </Link>
    </>
  );
}
