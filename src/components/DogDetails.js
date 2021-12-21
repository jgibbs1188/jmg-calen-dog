import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './dog buttons/DeleteButton';
import EditButton from './dog buttons/EditButton';

const DetailsImageStyle = styled.img`
  border: 2px solid white;
`;

export default function DogDetails({ dogObj }) {
  return (
    <>
      <div className="dogCard">
        <DetailsImageStyle src={dogObj.dogImage} alt={dogObj.dogName} />
        <h2>{dogObj.dogName}</h2>
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
