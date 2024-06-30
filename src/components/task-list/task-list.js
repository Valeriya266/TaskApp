import TaskListItem from "../task-list-item/task-list-item";

import './task-list.css';

const TaskList = ({data}) => {
    
const elements = data.map(item => {
    return (
        <TaskListItem {...item}/>
    )
})

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TaskList;