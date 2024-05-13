/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import TasksDoneButton from './TasksDoneButton';

interface Task {
  title: string;
  id: string;
  completed: boolean;
}

export const Tasks: React.FC = () => {
  const [taskList, setTaskList] = useState([] as Task[]);
  const [tasksCompleted, setTasksCompleted] = useState(false as boolean);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch('https://api.jsonbin.io/v3/b/66421991ad19ca34f868d939')
      .then((response) => response.json())
      .then((data: any) => {
        setTaskList(data.record.tasks);
        console.log('data', data);
      })
  }

  const setAllTasksDone = () => {
    console.log('button clicked');
    setTasksCompleted(true);
  }

  return (
    <>
      {
        tasksCompleted && <h3>All tasks are done!</h3>
      }
      <ul>
        {taskList?.map((task: Task) => (
            <li
              css={{
                color: 'black',
                textAlign: 'left',
                width: '500px',
                backgroundColor: task.completed ? 'green' : 'red',
              }}
              key={task.id}>
              {task.title}
            </li>
          )
        )}
      </ul>
      <TasksDoneButton setMyTasksDone={setAllTasksDone}/>
    </>
  )
};

