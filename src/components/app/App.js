import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-panel/task-add-form';

import './app.css';

function App() {
const data = [
  {task: 'Стоматолог', date: '04.06.2024', priority: true, id: 1},
  {task: 'Корпоратив', date: '03.06.2024', priority: false, id: 2},
  {task: 'Уборка', date: '07.06.2024', priority: false, id: 3}
]

  return (
    <div className="app">
      <AppInfo/>
      <SearchPanel/>
      <AppFilter/>
      <TaskList data={data}/>
      <TaskAddForm/>
    </div>
  );
}

export default App;
