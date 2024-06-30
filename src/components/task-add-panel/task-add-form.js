import './task-add-form.css';

const TaskAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте новую задачу</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Что за задача?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Какой дэдлайн?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default TaskAddForm;