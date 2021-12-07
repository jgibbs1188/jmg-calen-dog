import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function DogCard({ dogObj }) {
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
          <button type="button" className="fa btn-danger">
            Delete
          </button>
          <button type="button" className="fa btn-success">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

DogCard.propTypes = {
  //   user: PropTypes.oneOfType([
  //     PropTypes.shape({
  //       uid: PropTypes.string,
  //     }),
  //     PropTypes.bool,
  //   ]),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
  }),
  //   setDogs: PropTypes.func,
};

DogCard.defaultProps = {
  //   user: {},
  dogObj: {},
  //   setDogs: () => {},
};

export default DogCard;