import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <SearchPanel/>
      <AppFilter/>
    </div>
  );
}

export default App;
