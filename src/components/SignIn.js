import React from 'react';
import { signInUser, signOutUser } from '../api/auth';

export default function SignIn() {
  return (
    <div className="text-center mt-5">
      <h1>Welcome! Sign In!</h1>
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Sign In
      </button>
      <button type="button" className="btn btn-danger" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
}
