import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleTask } from '../helpers/tasksData';
import TaskForm from '../components/TaskForm';
import { getSingleDog } from '../helpers/dogsData';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

export default function EditTask() {
  const [editTask, setEditTask] = useState({});
  const [doggoObj, setDoggoObj] = useState({});
  const { taskFirebaseKey } = useParams();
  const { dogFirebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleTask(taskFirebaseKey).then((task) => {
      if (isMounted) setEditTask(task);
      getSingleDog(dogFirebaseKey).then((dog) => {
        setDoggoObj(dog);
      });
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Page>
      <TaskForm
        taskObj={editTask}
        dogObj={doggoObj}
        dogFirebaseKey={dogFirebaseKey}
      />
    </Page>
  );
}

EditTask.propTypes = {
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
    taskNote: PropTypes.string,
    dogId: PropTypes.string,
  }),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
};

EditTask.defaultProps = {
  taskObj: {},
  dogObj: {},
};
