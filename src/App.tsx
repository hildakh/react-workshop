import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TaskList } from './components/task-list/TaskList';
import { TaskType } from './types/Task.type';
import { UserType } from './types/User.type';
import { Task } from './components/task/Task';
import { AppDispatch } from './store/store';
import { setCurrentUser, fetchCurrentuser } from './store/currentUser.slice';

export const TasksContext = createContext([] as TaskType[]);
export const UserContext = createContext({} as UserType);

export const App: React.FC = () => {
  const [taskList, setTaskList] = useState([] as TaskType[]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetchTasks();
    fetchUser();
  }, [])

  const fetchTasks = () => {
    fetch('https://api.jsonbin.io/v3/b/66421991ad19ca34f868d939')
      .then((response) => response.json())
      .then((data: any) => {
        setTaskList(data.record.tasks);
      })
  };

  const fetchUser = () => {
    dispatch(fetchCurrentuser());

    fetch('https://api.jsonbin.io/v3/b/66428a86ad19ca34f8690736')
      .then((response) => response.json())
      .then((data: any) => {
        const { user } = data.record;
        const transformedUser = {
          firstName: user.first_name,
          lastName: user.last_name,
        };

        dispatch(setCurrentUser(transformedUser));
      })
  };

  return (
    <Router>
      <TasksContext.Provider value={taskList}>
        <Routes>
          <Route path='/edit/:id' element={<Task />} />
          <Route path='/' element={<TaskList />}/>
        </Routes>
      </TasksContext.Provider>
    </Router>
  );
}

export default App;
