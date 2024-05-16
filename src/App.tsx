import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { TaskList } from './components/task-list/TaskList';
import { Task } from './components/task/Task';
import { AppDispatch } from './store/store';
import { fetchCurrentUser } from './store/currentUser.actions';
import { fetchTaskList } from './store/tasks.actions';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTaskList());
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/edit/:id' element={<Task />} />
        <Route path='/' element={<TaskList />}/>
      </Routes>
    </Router>
  );
}

export default App;
