/** @jsxImportSource @emotion/react */

import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TasksContext } from '../../App';

export const Task: React.FC = () => {
  const tasks = useContext(TasksContext);

  const { id: taskId} = useParams();

  const currentTask = tasks.find(task => task.id === taskId);

  return (
    <div css={{
      padding: '30px',
    }}>
      <h3>{currentTask?.title}</h3>
    </div>
  );
}
