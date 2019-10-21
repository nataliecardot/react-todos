import React, { Component } from 'react';

// Class component since need local state to store what user types into input field (and not using Hooks)

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = e => {
    // Prevents default action of form being submitted, which is to refresh the page
    e.preventDefault();
    // Reminder: You automatically get props in class-based components. Since addTodo method on parent component is passed as a prop, it's available in this one
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="input">Add new todo:</label>
          <input
            id="input"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;