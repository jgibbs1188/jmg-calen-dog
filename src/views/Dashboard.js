import React from 'react';
import { Link } from 'react-router-dom';

export default function Dasboard() {
  return (
    <>
      <div>This is the Dashboard page!</div>
      <Link className="active btn-success" to="/new">
        You don&apos;t have any Doggos! Would you like to add one?
      </Link>
    </>
  );
}
