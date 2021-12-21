import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteTask } from '../../helpers/tasksData';

export default function TaskDeleteButton({ taskFirebaseKey, setTasks }) {
  const { dogFirebaseKey } = useParams();
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn-outline-danger btn"
      onClick={() => {
        deleteTask(taskFirebaseKey, dogFirebaseKey).then((allTasksByDog) => {
          setTasks(allTasksByDog);
          history.push(`/dogs/${dogFirebaseKey}`);
        });
      }}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
}

TaskDeleteButton.propTypes = {
  taskFirebaseKey: PropTypes.string,
  setTasks: PropTypes.func,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
  dogObj: PropTypes.shape({
    dogName: PropTypes.string,
    dogImage: PropTypes.string,
    dogFirebaseKey: PropTypes.string,
  }),
};

TaskDeleteButton.defaultProps = {
  taskFirebaseKey: '',
  setTasks: () => {},
  user: {},
  dogObj: {},
};
