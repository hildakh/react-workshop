/** @jsxImportSource @emotion/react */

import { useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const Task: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.taskList);

  const { id: taskId} = useParams();

  const currentTask = tasks.find(task => task.id === taskId);

  return (
    <div css={{
      padding: '30px',
    }}>
      <h3>{currentTask?.title}</h3>
      <p>{currentTask?.id}</p>
      {
        currentTask?.completed ? (
          <p>Completed</p>
        ) : (
          <p>Not completed</p>
        )
      }
    </div>
  );
}
