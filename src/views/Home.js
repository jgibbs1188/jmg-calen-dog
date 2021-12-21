import React from 'react';
import { Link } from 'react-router-dom';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function Home() {
  return (
    <Page>
      <h2>Welcome!</h2>
      <h4>
        Please use the buttons below to create a new dog or view your current
        list of dogs!
      </h4>
      <br />
      <Link className="btn btn-primary" aria-current="page" to="/new">
        Create a New Doggo
      </Link>
      <br />
      <Link className="btn btn-info" aria-current="page" to="/dogs">
        Dogs
      </Link>
    </Page>
  );
}
