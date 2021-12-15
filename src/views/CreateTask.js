import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

export default function CreateTask() {
  const { dogFirebaseKey } = useParams();
  return (
    <div>
      <TaskForm dogFirebaseKey={dogFirebaseKey} />
    </div>
  );
}
