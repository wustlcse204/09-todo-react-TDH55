import React, { Component } from 'react';
import './Todo.css';



export default function Todo() {
    return (
    <li className="todo-list-element">
      <data value="">
        <i className="far fa-circle" aria-hidden="true"></i>
        <h3 className="todo-title text incomplete">new</h3>
        <i className="far fa-trash-alt delete-button" aria-hidden="true"></i>
      </data>
    </li>
    )
}


// export default Todo;
