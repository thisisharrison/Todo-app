import { connect } from 'react-redux';
import { receiveStep, fetchSteps, addStep, deleteStep, updateStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list';

const mapDispatchToProps = (dispatch, ownProps) => ({
    // sync
    // receiveStep: (...args) => dispatch(receiveStep(...args)),
    // async: todo_id and steps as args
    addStep: (...args) => dispatch(addStep(...args))
});

// the whole state and a todo_id in a step
const mapStateToProps = (state, { todo }) => ({
    steps: stepsByTodoId(state, todo.id),
    todo_id: todo.id,
    todo
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);