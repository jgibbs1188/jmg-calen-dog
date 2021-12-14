import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteTask } from '../../helpers/tasksData';

export default function TaskDeleteButton({
  taskFirebaseKey,
  dogObj,
  setTasks,
}) {
  const { dogFirebaseKey } = useParams;
  return (
    <button
      type="button"
      className="btn-outline-dark btn"
      onClick={() => {
        deleteTask(taskFirebaseKey, dogObj).then((allTasksByDog) => {
          setTasks(allTasksByDog);
            <Link to={`/dogs/${dogFirebaseKey}`} />;
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
