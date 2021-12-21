import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TaskDeleteButton from './task buttons/TaskDeleteButton';
import TaskEditButton from './task buttons/TaskEditButton';

const TaskCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin: 5px;
  border: 2px rounded white;
`;

const TaskCardTitle = styled.h3`
  color: black;
`;

const TaskCardNote = styled.div`
  color: black;
`;

const TaskButtonContainer = styled.div`
  display: flex;
  margin: 3px;
  column-gap: 3px;
  justify-content: center;
`;
function TaskList({
  user, dogObj, taskObj, setTasks,
}) {
  const { dogFirebaseKey } = useParams();

  return (
    <div>
      <TaskCardContainer className="card">
        <div className="card-body">
          <TaskCardTitle className="card-title">
            {taskObj.taskName}
          </TaskCardTitle>
          <TaskCardNote className="card-text">{taskObj.taskNote}</TaskCardNote>
          <TaskButtonContainer>
            <TaskEditButton
              taskObj={taskObj}
              dogFirebaseKey={dogFirebaseKey}
              dogObj={dogObj}
            />
            <TaskDeleteButton
              user={user}
              taskFirebaseKey={taskObj.taskFirebaseKey}
              setTasks={setTasks}
              dogFirebaseKey={dogFirebaseKey}
            />
          </TaskButtonContainer>
        </div>
      </TaskCardContainer>
    </div>
  );
}

TaskList.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      uid: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
  setTasks: PropTypes.func,
};

TaskList.defaultProps = {
  user: {},
  dogObj: {},
  taskObj: {},
  setTasks: () => {},
};

export default TaskList;
