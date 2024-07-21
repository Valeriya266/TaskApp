import './app-filter.css';

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Все задачи'},
        {name: 'priority', label: 'В приоритете'},
        {name: 'in process', label: 'В процессе'}
    ]

    const buttons = buttonData.map(({name, label}) => 
        {
        const active = props.filter === name; 
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button type='button'
                className={ `btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)} >   
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