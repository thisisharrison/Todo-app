// Receive todos and populate
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
// Receive todo, add or update it
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

// Accepts array, reducer will turn this array into an object
export const receiveTodos = (todos) => (
    {
        type: RECEIVE_TODOS,
        todos
    }
)

export const receiveTodo = (todo) => (
    {
        type: RECEIVE_TODO,
        todo
    }
)

export const removeTodo = (todo) => (
    {
        type: REMOVE_TODO,
        todo
    }
)

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;
window.createTodo = createTodo;
window.updateTodo = updateTodo;
window.deleteTodo = deleteTodo;

// async actions
export const fetchTodos = () => dispatch => (
    APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
)

export const createTodo = todo => dispatch => (
    APIUtil.createTodo(todo)
        .then(
            todo => {dispatch(receiveTodo(todo)); dispatch(clearErrors())},
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const updateTodo = todo => dispatch => (
    APIUtil.updateTodo(todo)
        .then(
            todo => {dispatch(receiveTodo(todo)); dispatch(clearErrors());},
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const deleteTodo = todo => dispatch => (
    APIUtil.deleteTodo(todo)
        .then(
            todo => { dispatch(removeTodo(todo)); dispatch(clearErrors()); },
            err => dispatch(receiveErrors(err.responseJSON))
        )
)