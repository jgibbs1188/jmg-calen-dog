import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TaskEditButton({ taskFirebaseKey }) {
  return (
    <Link to={`/edit/${taskFirebaseKey}`} className="btn-outline-dark btn">
      <i className="fas fa-edit" />
    </Link>
  );
}

TaskEditButton.propTypes = {
  taskFirebaseKey: PropTypes.string,
};

TaskEditButton.defaultProps = {
  taskFirebaseKey: '',
};
