import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { createTask, updateTask } from '../helpers/tasksData';
import SubmitButton from './SubmitButton';

const TaskFormContainer = styled.form`
  border: 2px solid white;
  padding: 10px;
`;

const TaskFormInputStyle = styled.div`
  margin: 5px;
`;

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
  });

  const history = useHistory();

  useEffect(() => {
    if (taskObj?.taskFirebaseKey) {
      setFormInput({
        taskName: taskObj.taskName,
        taskNote: taskObj.taskNote,
        taskFirebaseKey: taskObj.taskFirebaseKey,
        dogId: dogFirebaseKey,
      });
    } else {
      setFormInput(initialTaskState);
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
    if (taskObj?.taskFirebaseKey) {
      updateTask(formInput, dogObj).then(() => {
        resetForm();
        history.push(`/dogs/${dogObj.dogFirebaseKey}`);
      });
    } else {
      createTask(
        {
          ...formInput,
          dogId: dogObj.dogFirebaseKey,
        },
        dogObj,
      ).then(() => {
        history.push(`/dogs/${dogObj.dogFirebaseKey}`);
      });
    }
  };

  return (
    <TaskFormContainer onSubmit={handleSubmit}>
      <h1>{taskObj?.taskFirebaseKey ? 'EDIT' : 'SAVE'} TASKS</h1>
      <TaskFormInputStyle>
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
      </TaskFormInputStyle>
      <div>
        <SubmitButton dogFirebaseKey={dogFirebaseKey} taskObj={taskObj} />
      </div>
    </TaskFormContainer>
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
