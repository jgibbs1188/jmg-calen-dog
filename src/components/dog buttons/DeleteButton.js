import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteDog } from '../../helpers/dogsData';

export default function DeleteButton({ dogFirebaseKey, user, setDogs }) {
  const history = useHistory();
  return (
    <button
      type="button"
      className="btn-outline-danger btn"
      onClick={() => {
        deleteDog(dogFirebaseKey, user).then((allDogs) => {
          setDogs(allDogs);
          history.push('/dogs');
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

DeleteButton.propTypes = {
  dogFirebaseKey: PropTypes.string,
  setDogs: PropTypes.func,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

DeleteButton.defaultProps = {
  dogFirebaseKey: '',
  setDogs: () => {},
  user: {},
};
