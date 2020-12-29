import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list';

const mapDispatchToProps = (dispatch, ownProps) => ({
    receiveStep: (...args) => dispatch(receiveStep(...args)),
    fetchSteps: (...args) => dispatch(fetchSteps(...args)),
    addStep: (...args) => dispatch(addStep(...args)),
    removeStep: (...args) => dispatch(removeStep(...args)),
    updateStep: (...args) => dispatch(updateStep(...args))
});

// the whole state and a todo_id in a step
const mapStateToProps = (state, { todo_id }) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);