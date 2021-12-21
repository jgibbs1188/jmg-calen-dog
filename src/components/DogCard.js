import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteButton from './dog buttons/DeleteButton';
import EditButton from './dog buttons/EditButton';
import DetailsButton from './dog buttons/DetailsButton';

function DogCard({ user, dogObj, setDogs }) {
  const DogImage = styled.img`
    max-width: 200px;
    max-height: 200px;
    border: solid 2px black;
  `;

  const DogCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border: 2px rounded white;
  `;

  const DogCardTitle = styled.h3`
    color: black;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    margin: 5px;
    column-gap: 5px;
    justify-content: center;
  `;

  return (
    <div>
      <DogCardContainer className="card">
        <div className="card-body">
          <DogCardTitle className="card-title">{dogObj.dogName}</DogCardTitle>
          <DogImage src={dogObj.dogImage} alt={dogObj.dogName} />
          <ButtonContainer>
            <EditButton dogFirebaseKey={dogObj.dogFirebaseKey} />
            <DeleteButton
              user={user}
              dogFirebaseKey={dogObj.dogFirebaseKey}
              setDogs={setDogs}
            />
            <DetailsButton dogFirebaseKey={dogObj.dogFirebaseKey} />
          </ButtonContainer>
        </div>
      </DogCardContainer>
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
