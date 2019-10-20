import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  // This is alternative class component syntax - class field declaration, allows you to initialize local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them. See https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax and https://www.robinwieruch.de/react-state-without-constructor
  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Call mom'}
    ]
  }

  deleteTodo = id => {
    // filter() method creates a new array with all elements that pass the test implemented by the provided function
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    // Using destructuring here; when key and value are same, can just put todos instead of todos: todos
    this.setState({
      todos
    });
  }

  render() {
    return (
      // Materialize CSS container class used to contain body content, sets to ~70% of window width
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
