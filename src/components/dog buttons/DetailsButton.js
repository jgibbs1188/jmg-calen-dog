import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DetailsButton({ dogFirebaseKey }) {
  return (
    <Link to={`/dogs/${dogFirebaseKey}`} className="btn-outline-success btn">
      <i className="fas fa-paperclip" />
    </Link>
  );
}

DetailsButton.propTypes = {
  dogFirebaseKey: PropTypes.string,
};

DetailsButton.defaultProps = {
  dogFirebaseKey: '',
};
