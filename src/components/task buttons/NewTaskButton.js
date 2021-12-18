import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function NewTaskButton() {
  const { dogFirebaseKey } = useParams();

  return (
    <Link to={`/new_task/${dogFirebaseKey}`} className="btn-outline-dark btn">
      Create a New Task!
      <i className="fas fa-creative-commons" />
    </Link>
  );
}
