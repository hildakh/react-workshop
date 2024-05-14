/** @jsxImportSource @emotion/react */
import { useState, useContext } from 'react';
import TasksDoneButton from '../TasksDoneButton';
import { TaskType } from '../../types/Task.type';
import { TaskListItem } from '../task-list-item/TaskListItem';
import { TasksContext, UserContext } from '../../App';

export const TaskList: React.FC = () => {
  const [tasksCompleted, setTasksCompleted] = useState(false as boolean);

  const taskList = useContext(TasksContext);
  const currentUser = useContext(UserContext);

  const setAllTasksDone = () => {
    setTasksCompleted(true);
  }

  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {
        tasksCompleted && <h3>All tasks are done!</h3>
      }
      {
        currentUser?.firstName && <h3>Welcome {currentUser.firstName} {currentUser.lastName}!</h3>
      }
      <ul
        css={{
          margin: 0,
          width: '500px',
          alignSelf: 'baseline',
        }}
      >
        {taskList?.map((task: TaskType) => (
            <TaskListItem task={task} key={task.id}/>
          )
        )}
      </ul>
      <TasksDoneButton setMyTasksDone={setAllTasksDone}/>
    </div>
  )
};

