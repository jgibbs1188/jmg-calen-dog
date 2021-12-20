import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function EditButton({ dogFirebaseKey }) {
  return (
    <Link to={`/edit/${dogFirebaseKey}`} className="btn-outline-warning btn">
      <i className="fas fa-edit" />
    </Link>
  );
}

EditButton.propTypes = {
  dogFirebaseKey: PropTypes.string,
};

EditButton.defaultProps = {
  dogFirebaseKey: '',
};
