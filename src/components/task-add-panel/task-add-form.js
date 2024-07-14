import { Component } from 'react';

import './task-add-form.css';

class TaskAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.task, this.state.date);
        this.setState({
            task: '',
            date: ''
        })
    }

    render() {
        const {task, date} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте новую задачу</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Что за задача?"
                        name='task'
                        value = {task}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Какой дэдлайн?" 
                        name='date'
                        value = {date}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TaskAddForm;