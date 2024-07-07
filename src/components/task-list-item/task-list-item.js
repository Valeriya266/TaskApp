import { Component } from 'react';

import './task-list-item.css';

class TaskListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: false,
            process: false
        }
    }

    onPriority = () => {
        this.setState(({priority}) => ({
            priority: !priority
        }))
    }

    onProcess = () => {
        this.setState(({process}) => ({
            process: !process
        }))
    }

    render() {
    const {task, date, onDelete, onToggleIncrease, onToggleRise} = this.props;
    const {priority, process} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (priority) {
            classNames += ` increase`;
        }

        if (process) {
            classNames += ` like`;
        }

    
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onProcess}>{task}</span>
                <input type="text" className="list-group-item-input" defaultValue={date}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onPriority}>
                        <i className="fas fa-cookie"></i>    
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>    
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default TaskListItem;