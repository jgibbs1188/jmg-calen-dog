import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './dog buttons/DeleteButton';
import EditButton from './dog buttons/EditButton';

export default function DogDetails({ dogObj }) {
  return (
    <>
      <div className="dogCard">
        <img src={dogObj.dogImage} alt={dogObj.dogName} />
        <h4>{dogObj.dogName}</h4>
        <div>
          <EditButton dogFirebaseKey={dogObj.dogFirebaseKey} />
          <DeleteButton dogFirebaseKey={dogObj.dogFirebaseKey} />
        </div>
      </div>
    </>
  );
}

DogDetails.propTypes = {
  dogObj: PropTypes.shape({
    dogImage: PropTypes.string,
    dogName: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
};

DogDetails.defaultProps = {
  dogObj: {},
};
