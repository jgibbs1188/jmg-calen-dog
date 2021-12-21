import React from 'react';
import SignIn from '../components/SignIn';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function Login() {
  return (
    <Page>
      <SignIn />
    </Page>
  );
}
