import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { getSingleDog } from '../helpers/dogsData';

export default function CreateTask() {
  const { dogFirebaseKey } = useParams();
  const [doggoObj, setDoggoObj] = useState({});
  console.warn('Create Task', dogFirebaseKey);

  useEffect(() => {
    getSingleDog(dogFirebaseKey).then(setDoggoObj);
  }, []);

  console.warn(doggoObj);

  return (
    <div>
      <TaskForm dogFirebaseKey={doggoObj.dogFirebaseKey} />
    </div>
  );
}
