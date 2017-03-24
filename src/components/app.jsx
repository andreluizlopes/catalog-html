import '../sass/main';

import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import ComponentTest from './component-test';



const todos = [
{
    task: 'make React tutorial',
    isCompleted: false
},
{
    task: 'teste',
    isCompleted: false
},
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }
    render() {
        return (
            <div>
                <h1>React Todos</h1>
                <ComponentTest />
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false,
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos });
    }
}