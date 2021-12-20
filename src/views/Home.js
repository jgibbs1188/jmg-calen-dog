import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>
        Home Page! Here you will see a link to your dashboard and dogs.
        <br />
        Maybe even your profile!
      </div>
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
