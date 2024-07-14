import './app-info.css';

const AppInfo = ({tasks, priorityTasks}) => {
    return (
        <div className='app-info'>
            <h1>Учёт задач на неделю</h1>
            <h2>Общее число задач: {tasks}</h2>
            <h2>Задачи в приоритете: {priorityTasks}</h2>
        </div>
    )
}

export default AppInfo;