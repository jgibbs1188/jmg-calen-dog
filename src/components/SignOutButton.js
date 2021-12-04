import React, { useEffect } from 'react';
import { signOutUser } from '../api/auth';

export default function SignOutButton() {
  useEffect(() => {});

  return (
    <button
      type="button"
      className="btn btn-outline-light  "
      onClick={signOutUser}
    >
      <i className="fas fa-sign-out-alt" />
    </button>
  );
}
