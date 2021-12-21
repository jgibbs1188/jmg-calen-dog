import React from 'react';
import { Link } from 'react-router-dom';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function Dasboard() {
  return (
    <>
      <Page>This is the Dashboard page!</Page>
      <Link className="active btn-success" to="/new">
        You don&apos;t have any Doggos! Would you like to add one?
      </Link>
    </>
  );
}
