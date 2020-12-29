import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// props has todos and dispatch actions from mapStateToProps from redux state
class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos, updateTodo, createTodo, deleteTodo } = this.props;
        const list = todos.map((todo, idx) => <TodoListItem todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo} />);
        return (
            <div>
                <TodoForm updateTodo={updateTodo} createTodo={createTodo} errors={this.props.errors}/>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TodoList; 