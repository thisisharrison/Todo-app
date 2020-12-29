// Container component
// Map redux state and store's dispatch function to react props
// Takes state and dispatch as params
// Pass to the presentational component

import { connect } from 'react-redux';
import { receiveTodo, removeTodo, fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import TodoList from './todo_list';


const mapStateToProps = state => ({
    todos: allTodos(state),
    state, 
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);