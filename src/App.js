import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo.js';
import NewTodo from './NewTodo';



export default function App() {

  const [todos, setTodos] = useState([])
  const [sortBy, setSortBy] = useState("created")

  console.log(todos)

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

  //TODO: try to call this on new elements/edited elements
  useEffect(() => {
    console.log(sortBy)
    const parameters = {
      newestFirst: "created_at",
      oldestFirst: "created_at",
      az: "text",
      za: "text",
      completedFirst: "completed",
      incompleteFirst: "completed",
    }

    const sortParameter = parameters[sortBy]
    console.log(todos)
    // TODO: try calling this same switch in the settodos hook
    switch(sortBy){
      case "newestFirst":{
        console.log("newest")
        const sorted = [...todos].sort((a, b) => {
          return a[sortParameter].toLowerCase().localeCompare(b[sortParameter].toLowerCase())
        }).reverse
        // console.log(sorted)
        setTodos(sorted)
        break;
      }
      case "oldestFirst":{
        console.log("oldest")
        const sorted = [...todos].sort((a, b) => {
          return a[sortParameter].toLowerCase().localeCompare(b[sortParameter].toLowerCase())
        })
        setTodos(sorted)
        break;
      }
      case "az":{
        console.log("az")
        const sorted = [...todos].sort((a, b) => {
          return a[sortParameter].toLowerCase().localeCompare(b[sortParameter].toLowerCase())
        })
        setTodos(sorted)
        break;
      }
      case "za":{
        console.log("za")
        const sorted = [...todos].sort((a, b) => {
          return a[sortParameter].toLowerCase().localeCompare(b[sortParameter].toLowerCase())
        }).reverse()
        setTodos(sorted)
        break;
      }
      case "completedFirst":{
        console.log("completed")
        const sorted = [...todos].sort((a, b) => {
          return (a[sortParameter] === b[sortParameter]) ? 0 : a[sortParameter]? -1 : 1
        })
        setTodos(sorted)
        break;
      }
      case "incompleteFirst":{
        console.log("incomplete")
        const sorted = [...todos].sort((a, b) => {
          return (a[sortParameter] === b[sortParameter]) ? 0 : a[sortParameter]? -1 : 1
        }).reverse()
        setTodos(sorted)
        break;
      }
      default: {
        console.log("default")
        const sorted = [...todos].sort((a, b) => {
          return a[sortParameter].toLowerCase().localeCompare(b[sortParameter].toLowerCase())
        }).reverse()
        setTodos(sorted)
        break;
      }
    }
  }, [sortBy])

  const change = (e) => {
    setSortBy(e.target.value)
  }


  return (
    <Fragment>
      <nav id="header-nav">
        <div className="content-wrapper" id="header-content-wrapper">
            <h1 id="header-title" className="text title">TODO List App</h1>
            {/* TODO: style this */}
            <select name="sort_by" id="sort-input" onChange={change}>
              <option className="sort-choice" value="newestFirst">Newest First</option>
              <option className="sort-choice" value="oldestFirst">Oldest First</option>
              <option className="sort-choice" value="az">A-Z</option>
              <option className="sort-choice" value="za">Z-A</option>
              <option className="sort-choice" value="completedFirst">Completed First</option>
              <option className="sort-choice" value="incompleteFirst">Incomplete First</option>
            </select>
        </div>
      </nav>
      <main id="main-section">
        <div className="content-wrapper" id="main-content-wrapper">
              <div id="todo-list-wrapper">
                  <ul id="todo-list-ul">
                    {todos.map((todo, todoNumber)=> (
                      <Todo key={todo.id} text={todo.text} completed={todo.completed} updateList={setTodos} todos={todos} todoIndex={todoNumber} id={todo.id} />
                    ))}
                    <NewTodo todos={todos} onSubmit={setTodos}/>
                  </ul>
              </div>
          </div>
      </main>
    </Fragment> 
  )
}
