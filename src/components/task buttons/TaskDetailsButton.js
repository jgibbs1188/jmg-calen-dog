import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TaskDetailsButton({ taskFirebaseKey }) {
  return (
    <Link to={`/dogs/${taskFirebaseKey}`} className="btn-outline-dark btn">
      <i className="fas fa-paperclip" />
    </Link>
  );
}

TaskDetailsButton.propTypes = {
  taskFirebaseKey: PropTypes.string,
};

TaskDetailsButton.defaultProps = {
  taskFirebaseKey: '',
};
