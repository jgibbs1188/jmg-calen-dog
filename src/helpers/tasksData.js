import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllTasksByDog = (dogObj) => new Promise((resolve, reject) => {
  axios
    .get(
      `${dbUrl}/tasks.json?orderBy="dogId"&equalTo="${dogObj.dogFirebaseKey}"`,
    )
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleTask = (taskFirebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/tasks/${taskFirebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// obj is form object
const createTask = (obj, dogObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/tasks.json`, obj)
    .then((response) => {
      const taskFirebaseKey = { taskFirebaseKey: response.data.name };
      axios
        .patch(`${dbUrl}/tasks/${response.data.name}.json`, taskFirebaseKey)
        .then(() => {
          getAllTasksByDog(dogObj).then(resolve);
        });
    })
    .catch(reject);
});

const updateTask = (taskObj, dogObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/tasks/${taskObj.taskFirebaseKey}.json`, taskObj)
    .then(() => getAllTasksByDog(dogObj).then(resolve))
    .catch(reject);
});

const deleteTask = (taskFirebaseKey, dogObj) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/tasks/${taskFirebaseKey}.json`)
    .then(() => getAllTasksByDog(dogObj).then(resolve))
    .catch(reject);
});

export {
  getAllTasksByDog, getSingleTask, createTask, updateTask, deleteTask,
};
