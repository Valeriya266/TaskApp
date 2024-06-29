import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';

import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <AppFilter/>
    </div>
  );
}

export default App;
