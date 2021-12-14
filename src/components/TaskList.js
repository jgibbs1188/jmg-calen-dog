import React from 'react';
import PropTypes from 'prop-types';
import TaskDeleteButton from './task buttons/TaskDeleteButton';
import TaskEditButton from './task buttons/TaskEditButton';

function TaskList({ user, taskObj, setTaskObj }) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{taskObj.taskName}</h4>
          <div className="card-text">{taskObj.taskNote}</div>
          <TaskEditButton taskFirebaseKey={taskObj.taskFirebaseKey} />
          <TaskDeleteButton
            user={user}
            taskFirebaseKey={taskObj.taskFirebaseKey}
            setTaskObj={setTaskObj}
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
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
  setTaskObj: PropTypes.func,
};

TaskList.defaultProps = {
  user: {},
  taskObj: {},
  setTaskObj: () => {},
};

export default TaskList;
