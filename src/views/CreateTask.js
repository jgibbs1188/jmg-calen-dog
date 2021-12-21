import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { getSingleDog } from '../helpers/dogsData';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function CreateTask() {
  const { dogFirebaseKey } = useParams();
  const [doggoObj, setDoggoObj] = useState({});

  useEffect(() => {
    getSingleDog(dogFirebaseKey).then(setDoggoObj);
  }, []);

  return (
    <Page>
      <TaskForm dogFirebaseKey={doggoObj.dogFirebaseKey} />
    </Page>
  );
}
