import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { signInUser } from '../api/auth';

const SignInContainer = styled.div`
  border: 2px solid white;
  padding: 10px;
`;

export default function SignIn() {
  return (
    <SignInContainer>
      <h1>Sign In To Start!</h1>
      <Button
        type="button"
        className="btn btn-large btn-warning"
        onClick={signInUser}
      >
        Sign In
      </Button>
    </SignInContainer>
  );
}
