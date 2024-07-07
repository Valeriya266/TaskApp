import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css';

const TaskList = ({data, onDelete}) => {
    
const elements = data.map(item => {
const {id, ...itemProps} = item;

    return (
        <TaskListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>
    )
})

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TaskList;