import React, { Component, Fragment } from 'react';
import './App.css';
import Todo from './Todo.js';



export default function App() {
  return (
    <Fragment>
      <nav id="header-nav">
        <div class="content-wrapper" id="header-content-wrapper">
            <h1 id="header-title" class="text title">TODO List App</h1>
        </div>
      </nav>
      <main id="main-section">
        <div class="content-wrapper" id="main-content-wrapper">
              <div id="todo-list-wrapper">
                  <ul id="todo-list-ul">
                    <Todo />
                  </ul>
              </div>
          </div>
      </main>
    </Fragment> 
  )
}


// export default App;
