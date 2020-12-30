import React from 'react';
import StepListContainer from '../steps/step_list_container';

// Display steps for an item
// Form to create new steps

class TodoDetailView extends React.Component {
    // made the ajax call and store steps in redux state
    componentDidMount() {
        this.props.fetchSteps();
    }

    render() {
        const {todo, removeTodo} = this.props;
        const tags = todo.tags
        const tag_names = tags.map((tag, idx) => (
            <li key={idx}>{tag.name}</li>
        ))
        return (
            <div>
                <h3>Detail</h3>
                <p>{todo.body}</p>
                <label htmlFor="tag_names"></label>
                <ul id="tag_names">
                    {tag_names}
                </ul>
                <button onClick={removeTodo}>Remove</button>
                <StepListContainer todo={todo}/>
            </div>
        )
    }
}

export default TodoDetailView;