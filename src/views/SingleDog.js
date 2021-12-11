import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleDog } from '../helpers/dogsData';
import DogDetails from '../components/DogDetails';

export default function SingleDog() {
  const { dogFirebaseKey } = useParams();
  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    getSingleDog(dogFirebaseKey).then(setSingleDog);
  }, []);

  return (
    <div>
      <DogDetails dogObj={singleDog} />
    </div>
  );
}

SingleDog.propTypes = {
  // user: PropTypes.oneOfType([
  //   PropTypes.shape({
  //     uid: PropTypes.string,
  //   }),
  //   PropTypes.bool,
  // ]),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
  // setDogs: PropTypes.func,
};

SingleDog.defaultProps = {
  // user: {},
  dogObj: {},
  // setDogs: () => {},
};
