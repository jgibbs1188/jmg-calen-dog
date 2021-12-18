import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
      getAllTasksByDog(dog.dogFirebaseKey).then((tasksArray) => {
        setTasks(tasksArray);
        setSingleDog(dog);
      });
    });
  }, []);

  return (
    <>
      <div>
        <DogDetails dogObj={singleDog} />
      </div>
      <Link to={`/${dogFirebaseKey}/new_task`}>Create a new Task!</Link>
      {tasks.map((taskObj) => (
        <TaskList
          taskObj={taskObj}
          key={taskObj.taskFirebaseKey}
          setTasks={setTasks}
          dogFirebaseKey={dogFirebaseKey}
          dogObj={singleDog}
        />
      ))}
    </>
  );
}
