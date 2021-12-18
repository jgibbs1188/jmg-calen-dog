import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NewTaskButton({ taskObj, dogObj }) {
  const { dogFirebaseKey } = useParams();
  console.warn(dogObj);
  console.warn(taskObj);

  return (
    <Link to={`/new_task/${dogFirebaseKey}`} className="btn-outline-dark btn">
      Create a New Task!
      <i className="fas fa-creative-commons" />
    </Link>
  );
}

NewTaskButton.propTypes = {
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
};

NewTaskButton.defaultProps = {
  taskObj: {},
  dogObj: {},
};
