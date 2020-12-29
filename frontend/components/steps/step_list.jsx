import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {    

    render() {
        // Passed from step_list_container
        const { steps, addStep, todo } = this.props;
        const stepsList = steps.map( step => 
                <StepListItemContainer 
                    key={step.id}
                    step={step}/>);
        return (
            <div>
                <h3>Steps</h3>
                <StepForm todo_id={todo.id} addStep={addStep}/>
                <ul>
                    {stepsList}
                </ul>
            </div>
        )
    }
}

export default StepList;