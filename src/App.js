import React, { Component } from 'react';

class App extends Component {
  // This is alternative class component syntax - class field declaration. See https://github.com/the-road-to-learn-react/react-alternative-class-component-syntax and https://www.robinwieruch.de/react-state-without-constructor
  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Call mom'}
    ]
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
