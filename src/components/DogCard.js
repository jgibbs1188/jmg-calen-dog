import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './buttons/DeleteButton';

function DogCard({ user, dogObj, setDogs }) {
  const DogImage = styled.img`
    max-width: 200px;
    max-height: 200px;
  `;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{dogObj.dogName}</h4>
          <DogImage src={dogObj.dogImage} alt={dogObj.dogName} />
          <button type="button" className="fa btn-info">
            Edit
          </button>
          <DeleteButton
            user={user}
            dogFirebaseKey={dogObj.dogFirebaseKey}
            setDogs={setDogs}
          />
          <button type="button" className="fa btn-success">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

DogCard.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
  setDogs: PropTypes.func,
};

DogCard.defaultProps = {
  user: {},
  dogObj: {},
  setDogs: () => {},
};

export default DogCard;
