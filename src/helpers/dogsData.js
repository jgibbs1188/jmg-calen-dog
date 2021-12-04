import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllDogs = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/dogs.json?orderBy="uid"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleDog = (obj) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/dogs/${obj.firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createDog = (obj, user) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/dogs.json`, obj)
    .then((response) => {
      axios.patch(`${dbUrl}/dogs/${response.data.name}.json`, {
        firebaseKey: response.data.name,
      });
    })
    .then(() => {
      getAllDogs(user).then(resolve);
    })
    .catch(reject);
});

const updateDog = (formObj, user) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/dogs/${formObj.firebaseKey}.json`, formObj)
    .then(() => getAllDogs(user).then(resolve))
    .catch(reject);
});

const deleteDog = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/dogs/${firebaseKey}`)
    .then(() => getAllDogs(user).then(resolve))
    .catch(reject);
});

export {
  getAllDogs, getSingleDog, createDog, updateDog, deleteDog,
};
