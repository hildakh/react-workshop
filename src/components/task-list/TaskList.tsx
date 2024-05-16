/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import TasksDoneButton from '../TasksDoneButton';
import { TaskType } from '../../types/Task.type';
import { TaskListItem } from '../task-list-item/TaskListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const TaskList: React.FC = () => {
  const [tasksCompleted, setTasksCompleted] = useState(false as boolean);

  const currentUserState = useSelector((state: RootState) => state.currentUser);
  const userFullName = `${currentUserState.user.firstName} ${currentUserState.user.lastName}`;
  const isLoading = currentUserState.isLoading;

  const taskList = useSelector((state: RootState) => state.taskList.tasks);

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
        isLoading && <h3>Loading...</h3>
      }
      {
        !isLoading &&
        <h3>
          Welcome {userFullName}
        </h3>
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

