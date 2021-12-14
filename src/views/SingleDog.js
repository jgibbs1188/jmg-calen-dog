import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleDog } from '../helpers/dogsData';
import DogDetails from '../components/DogDetails';
import TaskList from '../components/TaskList';
import { getAllTasksByDog } from '../helpers/tasksData';

export default function SingleDog() {
  const { dogFirebaseKey } = useParams();
  const [singleDog, setSingleDog] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getSingleDog(dogFirebaseKey).then((dog) => {
      getAllTasksByDog(dog).then((tasksArray) => {
        setTasks(tasksArray);
        setSingleDog(dog);
        console.warn(tasksArray);
      });
    });
  }, []);

  return (
    <>
      <div>
        <DogDetails dogObj={singleDog} />
      </div>
      <Link to="/dogs/:dogFirebaseKey/new_task">Create a new Task!</Link>
      {tasks.map((taskObj) => (
        <TaskList
          taskObj={taskObj}
          key={taskObj.taskFirebaseKey}
          setTasks={setTasks}
          dogObj={dogFirebaseKey}
        />
      ))}
    </>
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
  TaskList: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
  // setDogs: PropTypes.func,
};

SingleDog.defaultProps = {
  // user: {},
  dogObj: {},
  TaskList: {},
  // setDogs: () => {},
};
