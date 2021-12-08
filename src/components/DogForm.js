import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import userId from '../api/userId';
import { createDog, updateDog } from '../helpers/dogsData';

const initialDogState = {
  dogName: '',
  dogImage: '',
  dogFirebaseKey: '',
  uid: '',
};

function DogForm({ dogObj, user }) {
  const userInfo = userId();
  const [formInput, setFormInput] = useState({
    ...initialDogState,
    uid: userInfo,
  });

  const history = useHistory();

  useEffect(() => {
    if (dogObj.dogFirebaseKey) {
      setFormInput({
        dogName: dogObj.dogName,
        dogImage: dogObj.dogImage,
        dogFirebaseKey: dogObj.dogFirebaseKey,
        uid: userInfo.uid,
      });
    }
  }, [dogObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialDogState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dogObj.dogFirebaseKey) {
      updateDog(formInput, user).then(() => {
        resetForm();
        history.push('/dogs');
      });
    } else {
      createDog(formInput, user).then(() => {
        resetForm();
        history.push('/dogs');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{dogObj.dogFirebaseKey ? 'EDIT' : 'SAVE'} DOGGOS</h1>
      <input
        className="form-control input"
        type="text"
        name="dogName"
        id="dogName"
        value={formInput.dogName}
        onChange={handleChange}
        placeholder="DOGGO NAME"
      />
      <input
        className="form-control input"
        type="text"
        name="dogImage"
        id="dogImage"
        value={formInput.dogImage}
        onChange={handleChange}
        placeholder="DOGGO IMAGE"
      />
      <button className="btn-outline-dark" type="submit">
        {dogObj.dogFirebaseKey ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

DogForm.propTypes = {
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

DogForm.defaultProps = {
  dogObj: {},
  user: {},
};

export default DogForm;
