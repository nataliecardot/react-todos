import React from 'react';
import leftPad from 'left-pad';

// Stateless function component since not managing state
const Todos = ({todos}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left.</p>
  );

  // collection is a Materialize class
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

export default Todos;