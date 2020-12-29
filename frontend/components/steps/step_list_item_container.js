import { connect } from 'react-redux';
import { receiveStep, removeStep, fetchSteps, addStep, deleteStep, updateStep } from '../../actions/step_actions';
import StepListItem from './step_list_item';

// step passed from step_list
const mapDispatchToProps = (dispatch, {step}) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step)),
    updateStep: updatedStep => dispatch(updateStep(updatedStep)),
    deleteStep: () => dispatch(deleteStep(step))
});

export default connect(null, mapDispatchToProps)(StepListItem);