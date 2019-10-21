import React from 'react';

// Stateless function component since not managing state
const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item todo" key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {/* Passing arrow function to onClick so don't need to bind, i.e., onClick={deleteTodo.bind(this, todo.id)}, which would create a new function with a predefined first parameter, todo.id. This is needed so that when deleteTodo is called, it knows where todo.id is coming from */}
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You're all done!</p>
  );

  // collection is a Materialize class
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

export default Todos;