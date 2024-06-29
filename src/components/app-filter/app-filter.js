import './app-filter.css';

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button
                className='btn btn-light'
                type='button'>
                    Все задачи
            </button>
            <button
                className='btn btn-light'
                type='button'>
                    Задачи в приоритете
            </button>  
        </div>
    )
}

export default AppFilter;