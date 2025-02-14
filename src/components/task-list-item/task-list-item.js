import './task-list-item.css';

const TaskListItem = (props) => {

    const {task, date, onDelete, onTogglePriority, onToggleProcess, priority, process} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (priority) {
        classNames += ` increase`;
    }

    if (process) {
        classNames += ` like`;
    }

    
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProcess}>{task}</span>
            <input type="text" className="list-group-item-input" defaultValue={date}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onTogglePriority}>
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

export default TaskListItem;