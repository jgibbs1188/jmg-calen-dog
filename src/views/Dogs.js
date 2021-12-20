import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { getAllDogs } from '../helpers/dogsData';
import DogCard from '../components/DogCard';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function Dogs({ user }) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllDogs(user).then((array) => {
      if (isMounted) {
        setDogs(array);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Page>
      <h1>Doggos!</h1>
      {/* <Link className="active btn-success" to="/new">
        Add A New Doggo?
      </Link> */}
      {dogs.map((dogObj) => (
        <DogCard
          key={dogObj.dogFirebaseKey}
          user={user}
          dogObj={dogObj}
          setDogs={setDogs}
        />
      ))}
    </Page>
  );
}

Dogs.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

Dogs.defaultProps = {
  user: {},
};
