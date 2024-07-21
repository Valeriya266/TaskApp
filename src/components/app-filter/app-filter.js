import './app-filter.css';

const AppFilter = (props) => {
    const buttonData = [
        {task: 'all', label: 'Все задачи'},
        {task: 'priority', label: 'В приоритете'},
        {task: 'in process', label: 'В процессе'}
    ];

    const buttons = buttonData.map(({task, label}) => 
        {
        const active = props.filter === task; 
        const clazz = active ? 'btn-light' : 'btn-outline-dark';
        
        return (
            <button type='button'
                className={ `btn ${clazz}`}
                key={task}
                onClick={() => props.onFilterSelect(task)} >   
                    {label}
            </button>
        )
    })

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
}

export default AppFilter;