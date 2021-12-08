import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllDogs = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/dogs.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleDog = (obj) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/dogs/${obj.dogFirebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createDog = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/dogs.json`, obj)
    .then((response) => {
      const dogFirebaseKey = { dogFirebaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/dogs/${response.data.name}.json`, dogFirebaseKey)
        .then(() => {
          getAllDogs(user).then(resolve);
        });
    })
    .catch(reject);
});

const updateDog = (formObj, user) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/dogs/${formObj.dogFirebaseKey}.json`, formObj)
    .then(() => getAllDogs(user).then(resolve))
    .catch(reject);
});

const deleteDog = (dogFirebaseKey, user) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/dogs/${dogFirebaseKey}.json`)
    .then(() => getAllDogs(user).then(resolve))
    .catch(reject);
});

export {
  getAllDogs, getSingleDog, createDog, updateDog, deleteDog,
};
