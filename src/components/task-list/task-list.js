import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css';

const TaskList = ({data, onDelete, onTogglePriority, onToggleProcess}) => {
    
const elements = data.map(item => {
const {id, ...itemProps} = item;

    return (
        <TaskListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onTogglePriority={() => onTogglePriority(id)}
            onToggleProcess={() => onToggleProcess(id)}/>
    )
})

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TaskList;