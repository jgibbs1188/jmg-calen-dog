import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import userId from '../api/userId';
import { createDog, updateDog } from '../helpers/dogsData';

const FormContainer = styled.form`
  border: 2px solid white;
  padding: 10px;
`;

const ButtonStyle = styled.button`
  margin: 5px;
`;

const FormInputStyle = styled.div`
  margin: 5px;
`;

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
        history.push(`/dogs/${dogObj.dogFirebaseKey}`);
      });
    } else {
      createDog(formInput, user).then(() => {
        resetForm();
        history.push('/dogs');
      });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>{dogObj.dogFirebaseKey ? 'EDIT' : 'SAVE'} YOUR DOGGO</h1>
      <FormInputStyle>
        <input
          className="form-control input"
          type="text"
          name="dogName"
          id="dogName"
          value={formInput.dogName}
          onChange={handleChange}
          placeholder="DOGGO NAME"
        />
      </FormInputStyle>
      <FormInputStyle>
        <input
          className="form-control input"
          type="text"
          name="dogImage"
          id="dogImage"
          value={formInput.dogImage}
          onChange={handleChange}
          placeholder="DOGGO IMAGE"
        />
      </FormInputStyle>
      <ButtonStyle className="btn btn-outline-light" type="submit">
        {dogObj.dogFirebaseKey ? 'UPDATE' : 'SUBMIT'}
      </ButtonStyle>
    </FormContainer>
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
