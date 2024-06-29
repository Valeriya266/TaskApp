import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <TaskListItem/>
            <TaskListItem/>
            <TaskListItem/>
        </ul>
    )
}

export default TaskList;