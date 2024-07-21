import './app-filter.css';

const AppFilter = () => {
    const buttonData = [
        {name: 'all', label: 'Все задачи'},
        {name: 'priority', label: 'В приоритете'},
        {name: 'in process', label: 'В процессе'}
    ]

    const buttons = buttonData.map(({name, label}) => 
        {
        return (
            <button type='button'
                className='btn btn-light'
                key={name}>
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