import React from 'react';
import DogForm from '../components/DogForm';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function CreateDog() {
  return (
    <Page>
      <DogForm />
    </Page>
  );
}
