import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './App.css';

class App extends Component {
  // This is alternative class component syntax - class field declaration, allows you to initialize local state without using the constructor and declare class methods by using arrow functions without the extra need to bind them. See https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax and https://www.robinwieruch.de/react-state-without-constructor
  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Call mom'},
      {id: 2, content: 'Pick up package'}
    ]
  }

  // todo passed in as state from handleSubmit method in child AddTodo component
  addTodo = todo => {
    // Attaching ID because each item iterated over needs unique key. Math.random() returns (pseudo)random number between 0 (inclusive) and 1 (exclusive)
    todo.id = Math.random();
    // Creating new array, and inside that array, dumping contents of todos state using spread syntax and including newly added todo
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
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
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <AddTodo addTodo={this.addTodo} />
        {/* Can't target a component with a class and add a margin, so this is a workaround to add some spacing between AddTodo and Todos components */}
        <div className="spacing-between" />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
