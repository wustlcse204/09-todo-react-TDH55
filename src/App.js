import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo.js';
import NewTodo from './NewTodo';



//sorting -> use a state hook for sorting?

export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    //api call
    const apiKey = "c4113f-42d6e9-f6658d-929da1-0a9677"
    const xhttp = new XMLHttpRequest()
    const url = "https://cse204.work/todos"
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            //get todos from the response
            let todoResponse = JSON.parse(this.responseText)
            //add todos to the page
            setTodos(todoResponse)
        }
    }
    xhttp.open("Get", url, true)
    xhttp.setRequestHeader("x-api-key", apiKey)
    xhttp.send()
  }, [])

  

  return (
    <Fragment>
      <nav id="header-nav">
        <div className="content-wrapper" id="header-content-wrapper">
            <h1 id="header-title" className="text title">TODO List App</h1>
        </div>
      </nav>
      <main id="main-section">
        <div className="content-wrapper" id="main-content-wrapper">
              <div id="todo-list-wrapper">
                  <ul id="todo-list-ul">
                    {/* TODO: iterate over todos and add TODO */}
                    {todos.map((todo, todoNumber)=> (
                      <Todo key={todo.id} text={todo.text} completed={todo.completed} updateList={setTodos} todos={todos} todoIndex={todoNumber} id={todo.id} />
                    ))}
                    {/* <Todo text="New" completed="true"/> */}
                    <NewTodo todos={todos} onSubmit={setTodos}/>
                  </ul>
              </div>
          </div>
      </main>
    </Fragment> 
  )
}


// export default App;
