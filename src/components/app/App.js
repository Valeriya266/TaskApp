import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-panel/task-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <SearchPanel/>
      <AppFilter/>
      <TaskList/>
      <TaskAddForm/>
    </div>
  );
}

export default App;
