import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSingleDog } from '../helpers/dogsData';
import DogDetails from '../components/DogDetails';
import TaskList from '../components/TaskList';
import { getAllTasksByDog } from '../helpers/tasksData';
import DogContainer from '../styles/DogContainer';

const Page = DogContainer();

const TaskViewStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CreateDogLinkStyle = styled.div`
  margin: 10px;
`;

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
    <Page>
      <div>
        <DogDetails dogObj={singleDog} />
      </div>
      <CreateDogLinkStyle>
        <Link
          className="btn btn-outline-info"
          to={`/${dogFirebaseKey}/new_task`}
        >
          Create a new Task!
        </Link>
      </CreateDogLinkStyle>
      <TaskViewStyle>
        {tasks.map((taskObj) => (
          <TaskList
            taskObj={taskObj}
            key={taskObj.taskFirebaseKey}
            setTasks={setTasks}
            dogFirebaseKey={dogFirebaseKey}
            dogObj={singleDog}
          />
        ))}
      </TaskViewStyle>
    </Page>
  );
}
