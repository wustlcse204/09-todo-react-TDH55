import React from 'react';
import './Todo.css';



export default function Todo(props) {
  console.log(props)
    return (
    <li className="todo-list-element">
      <data value="">
        <i className={`far ${props.completed ? "fa-check-circle" : "fa-circle"} `}aria-hidden="true"></i>
        <h3 className={`todo-title text ${props.completed ? "complete" : "incomplete"}`}>{props.text}</h3>
        <i className="far fa-trash-alt delete-button" aria-hidden="true"></i>
      </data>
    </li>
    )
}


// export default Todo;
