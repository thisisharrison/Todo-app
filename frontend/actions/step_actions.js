export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';
import * as APIUtil from '../util/step_api_util';
import { clearErrors, receiveErrors } from './error_actions';

export const receiveSteps = (steps) => ({
    type: RECEIVE_STEPS,
    steps
})

export const receiveStep = (step) => ({
    type: RECEIVE_STEP,
    step
})

export const removeStep = (step) => ({
    type: REMOVE_STEP,
    step
})

// async 
export const fetchSteps = (todo) => dispatch => (
    APIUtil.fetchSteps(todo).then(steps => dispatch(receiveSteps(steps)))
)

export const addStep = (todo_id, step) => dispatch => (
    APIUtil.addStep(todo_id, step)
        .then(
            step => {dispatch(receiveStep(step)); dispatch(clearErrors())},
            err => dispatch(receiveErrors(err.responseJSON))
            )
)

export const updateStep = (step) => dispatch => (
    APIUtil.updateStep(step).then(step => dispatch(receiveStep(step)))
)

export const deleteStep = (step) => dispatch => (
    APIUtil.deleteStep(step).then(step => dispatch(removeStep(step)))
)
