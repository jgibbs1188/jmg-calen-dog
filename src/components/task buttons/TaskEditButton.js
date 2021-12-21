import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TaskEditButton({ taskObj }) {
  const { dogFirebaseKey } = useParams();

  return (
    <Link
      to={`/${dogFirebaseKey}/${taskObj.taskFirebaseKey}`}
      className="btn-outline-warning btn"
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
