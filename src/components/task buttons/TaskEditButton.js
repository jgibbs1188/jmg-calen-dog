import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TaskEditButton({ taskObj, dogObj }) {
  console.warn(dogObj);
  return (
    <Link
      to={`/edit_task/${taskObj.taskFirebaseKey}`}
      className="btn-outline-dark btn"
    >
      <i className="fas fa-edit" />
    </Link>
  );
}

TaskEditButton.propTypes = {
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

TaskEditButton.defaultProps = {
  taskObj: {},
  dogObj: {},
};
