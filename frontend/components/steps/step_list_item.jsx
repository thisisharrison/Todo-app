import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleDone(e) {
        e.preventDefault();
        const toggleStep = Object.assign({}, this.props.step)
        toggleStep.done = !toggleStep.done;
        this.props.updateStep(toggleStep);
    }

    render() {
        const { deleteStep } = this.props;
        const { title, body, done } = this.props.step;
        return (
            <li>
                <h5>{title}</h5>
                <p>{body}</p>
                <button onClick={deleteStep}>Remove Step</button>
                <button onClick={this.toggleDone}>
                    {done ? "Undo" : "Done"}
                </button>
            </li>
        )
    }
}

export default StepListItem;