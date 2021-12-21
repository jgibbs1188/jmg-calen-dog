import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SubmitButton({ dogFirebaseKey }) {
  return (
    <button
      type="submit"
      className="btn btn-outline-light"
      onClick={() => {
        <Link to={`/dogs/${dogFirebaseKey}`} />;
      }}
    >
      SUBMIT
    </button>
  );
}

SubmitButton.propTypes = {
  dogFirebaseKey: PropTypes.string,
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
};

SubmitButton.defaultProps = {
  dogFirebaseKey: '',
  taskObj: {},
};
