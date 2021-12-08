import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleDog } from '../helpers/dogsData';
import DogForm from '../components/DogForm';

export default function EditDog() {
  const [editDog, setEditDog] = useState({});
  const { dogFirebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleDog(dogFirebaseKey).then((dog) => {
      if (isMounted) setEditDog(dog);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <DogForm dogObj={editDog} />
    </div>
  );
}

EditDog.propTypes = {
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
    dogImage: PropTypes.string,
    uid: PropTypes.string,
  }),
};

EditDog.defaultProps = { dogObj: {} };
