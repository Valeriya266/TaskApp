import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TaskList from '../task-list/task-list';
import TaskAddForm from '../task-add-panel/task-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {task: 'Стоматолог', date: '04.06.2024', priority: true, process: true, id: 1},
          {task: 'Корпоратив', date: '03.06.2024', priority: false, process: false, id: 2},
          {task: 'Уборка', date: '07.06.2024', priority: false, process: false, id: 3}
        ],
        term: '',
        filter: 'all'
      };
      this.maxId = 4; 
    }

    deleteItem = (id) => {
      this.setState(({data}) => {
        return {
          data: data.filter(item => item.id !== id)
        }
      })
    }

    addItem = (task, date) => {
      const newItem = {
        task,
        date, 
        priority: false,
        process: false,
        id: this.maxId++
      }

      this.setState(({data}) => {
        const newArr = [...data, newItem];

        return {
          data: newArr
        }
      })
    }

    onTogglePriority = (id) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          if (item.id === id) {
            return {...item, priority: !item.priority}
          }
          return item;
        })
      }))
    };

    onToggleProcess = (id) => {
      this.setState(({data}) => ({
        data: data.map(item => {
          if (item.id === id) {
            return {...item, process: !item.process}
          }
          return item;
        })
      }))
    };

    searchTask = (items, term) => {
      if(term.length === 0) {
        return items;
      }

      return items.filter(item => {
        return item.task.indexOf(term) > -1
    })
  }

    onUpdateSearch = (term) => {
      this.setState({term});
    }

    filterPost = (items, filter) => {
      switch (filter){
        case 'process':
          return items.filter(item => item.process);
        case 'priority':
          return items.filter(item => item.priority);
        default:
          return items;
      }
    }

    onFilterSelect = (filter) => {
      this.setState({filter})
    }

    render() {
      const tasks = this.state.data.length;
      const priorityTasks = this.state.data.filter(item => item.priority).length;
      const {data, term, filter} = this.state;
      const visibleData = this.filterPost(this.searchTask(data, term), filter);

      return(
        <div className="app">
          <AppInfo tasks={tasks} priorityTasks={priorityTasks}/>
          <div className="search-panel">
            <SearchPanel 
              onUpdateSearch={this.onUpdateSearch}/>
          </div>
          <AppFilter filter={filter} onFilterSelec={this.onFilterSelect}/>
          <TaskList 
              data={visibleData}
              onDelete={this.deleteItem}
              onTogglePriority={this.onTogglePriority}
              onToggleProcess={this.onToggleProcess}/>
          <TaskAddForm 
              onAdd={this.addItem}/>
      </div>
      )
    }
}

export default App;
