/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { TaskType } from '../../types/Task.type';

export const TaskListItem: React.FC<{ task: TaskType }> = ({ task }) => {
  const navigate = useNavigate();

  const handleEditClicked = () => {
    navigate(`/edit/${task.id}`);
  };

  return (
    <li
      css={{
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: '10px',
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        listStyleType: 'none',
        margin: '10px',
        padding: '10px',
      }}>
        <p>
        {task.title}
        </p>

      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p css={{
          marginRight: '10px',
        }}>
          {task.completed ? '✅' : '❌'}
        </p>
        <button
          css={{
            width: '50px',
            fontSize: '20px',
          }}
          onClick={handleEditClicked}
        >
          Edit
        </button>
      </div>
    </li>
  )
};
