// Controlled inputs and keep track of its state
// Have its local state
// props include todos and receiveTodo

import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        // Its local state and manage controlled inputs 
        this.state = {
            title: "",
            body: "",
            done: false,
            tag: "",
            tag_names: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTag = this.handleTag.bind(this);
        this.removeTag = this.removeTag.bind(this);
    }

    handleInput(key) {
        return e => this.setState({ [key] : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state);
        // dispatch redux action
        this.props.createTodo(todo).then(
            () => this.setState({
                title: "",
                body: "",
                tag_names: []
            })
        )
    }

    handleTag(e) {
        e.preventDefault();
        this.setState({ tag_names: [...this.state.tag_names, this.state.tag], tag: "" });
    }

    removeTag(idx) {
        this.setState({ tag_names: this.state.tag_names.splice(idx, 1) })
    }

    render () {
        let errors = this.props.errors ? <p>{this.props.errors}</p> : ""
        let tag_names = this.state.tag_names.map((tag, idx) => (
            <li key={idx} onClick={() => {this.removeTag(idx)}}>{tag}</li>
        ))
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add Todo!</h3>
                {errors}
                <label htmlFor="title">Title</label>
                <input type="text" 
                        id="title" 
                        value={this.state.title} 
                        placeholder="Finish a/A"
                        onChange={this.handleInput('title')} />

                <label htmlFor="body">Body</label>
                <textarea 
                        id="body" 
                        cols="20" 
                        rows="10"
                        placeholder="Final project and interview prep"
                        value={this.state.body}
                        onChange={this.handleInput('body')}></textarea>

                <label htmlFor="tags">Tag Names</label>
                <input type="text"
                        id="tags"
                        placeholder="urgent"
                        value={this.state.tag}
                        onChange={this.handleInput('tag')}
                        />
                <button type="button"
                        onClick={this.handleTag}>Add Tag</button>
                <ul>
                    { tag_names }
                </ul>

                <input type="submit" 
                        value="Add"/>
            </form>
        )
    }
}

export default TodoForm;