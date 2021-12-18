import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import TaskDeleteButton from './task buttons/TaskDeleteButton';
import TaskEditButton from './task buttons/TaskEditButton';

function TaskList({
  user, dogObj, taskObj, setTasks,
}) {
  const { dogFirebaseKey } = useParams();
  console.warn(setTasks);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{taskObj.taskName}</h4>
          <div className="card-text">{taskObj.taskNote}</div>
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
        </div>
      </div>
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
