import React from 'react';
import PropTypes from 'prop-types';

function DogCard({ dogObj }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{dogObj.name}</h4>
          <img src={dogObj.image} alt={dogObj.name} />
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
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  //   setDogs: PropTypes.func,
};

DogCard.defaultProps = {
  //   user: {},
  dogObj: {},
  //   setDogs: () => {},
};

export default DogCard;
