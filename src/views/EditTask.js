import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleTask } from '../helpers/tasksData';
import TaskForm from '../components/TaskForm';

export default function EditTask() {
  const [editTask, setEditTask] = useState({});
  const { taskFirebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    getSingleTask(taskFirebaseKey).then((task) => {
      if (isMounted) setEditTask(task);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <TaskForm taskObj={editTask} />
    </div>
  );
}

EditTask.propTypes = {
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
    taskNote: PropTypes.string,
    dogId: PropTypes.string,
  }),
};

EditTask.defaultProps = { taskObj: {} };
