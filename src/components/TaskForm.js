import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { createTask, updateTask } from '../helpers/tasksData';

const initialTaskState = {
  taskName: '',
  taskNote: '',
  taskFirebaseKey: '',
  dogId: '',
};

function TaskForm({ taskObj, dogObj }) {
  const { dogFirebaseKey } = useParams();
  const [formInput, setFormInput] = useState({
    ...initialTaskState,
    dogId: dogFirebaseKey,
  });

  console.warn(dogObj);

  const history = useHistory();

  useEffect(() => {
    if (taskObj.taskFirebaseKey) {
      setFormInput({
        taskName: taskObj.taskName,
        taskNote: taskObj.taskNote,
        taskFirebaseKey: taskObj.taskFirebaseKey,
        dogId: dogFirebaseKey,
      });
    }
  }, [taskObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialTaskState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskObj.taskFirebaseKey) {
      updateTask(formInput, dogObj).then(() => {
        resetForm();
        history.push(`/dogs/${dogObj.dogFirebaseKey}`);
      });
    } else {
      createTask(formInput, dogObj).then(() => {
        resetForm();
        history.push(`/dogs/${dogFirebaseKey}`);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{taskObj.taskFirebaseKey ? 'EDIT' : 'SAVE'} TASKS</h1>
      <input
        className="form-control input"
        type="text"
        name="taskName"
        id="taskName"
        value={formInput.taskName}
        onChange={handleChange}
        placeholder="TASK NAME"
      />
      <input
        className="form-control input"
        type="text"
        name="taskNote"
        id="taskNote"
        value={formInput.taskNote}
        onChange={handleChange}
        placeholder="TASK NOTE"
      />
      <button className="btn-outline-dark" type="submit">
        {taskObj.taskFirebaseKey ? 'UPDATE' : 'SUBMIT'}
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  taskObj: PropTypes.shape({
    taskName: PropTypes.string,
    taskNote: PropTypes.string,
    taskFirebaseKey: PropTypes.string,
  }),
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
  dogObj: PropTypes.shape({
    dogFirebaseKey: PropTypes.string,
  }),
};

TaskForm.defaultProps = {
  taskObj: {},
  user: {},
  dogObj: {},
};

export default TaskForm;
