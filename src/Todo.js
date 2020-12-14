import React, { useState } from 'react';
import './Todo.css';



export default function Todo({text, completed, updateList, todos, todoIndex, id}) {
    const [isCompleted, setCompleted] = useState(completed)
    const apiKey = "c4113f-42d6e9-f6658d-929da1-0a9677"


    const toggleComplete = () => {
      //TODO: update api
        const xhttpToggle = new XMLHttpRequest()
        const data = {
          completed: !isCompleted
        }
        xhttpToggle.onreadystatechange = function() {
          if(this.readyState === 4 && this.status === 200){
              //success
              //update ui
              setCompleted(isCompleted => !isCompleted)
          }else if (this.readyState === 4){
              console.log(this.responseText)
          }
      }

      xhttpToggle.open("PUT", "https://cse204.work/todos/" + id, true)
      xhttpToggle.setRequestHeader("Content-type", "application/json");
      xhttpToggle.setRequestHeader("x-api-key", apiKey)
      xhttpToggle.send(JSON.stringify(data))
    }

    const deleteTodo = (event) => {
      // const dataTag = event.target.parentElement
      // const todoID = dataTag.value
      const xhttp = new XMLHttpRequest()
      // const todoElement = dataTag.parentElement
  
      xhttp.onreadystatechange = function(){
          if(this.readyState === 4 && this.status === 200){ //successfully deleted todo
              //remove element from ui
              todos.splice(todoIndex, 1)
              updateList([])
              updateList(todos)
          }else if(this.readyState === 4){
              //error deleting
              console.log(this.responseText)
          }
      }
      xhttp.open("DELETE", `https://cse204.work/todos/${id}`, true)
      xhttp.setRequestHeader("x-api-key", apiKey)
      xhttp.send()
  }

    return (
    <li className="todo-list-element">
      <i className={`far ${isCompleted ? "fa-check-circle" : "fa-circle"}`} onClick={toggleComplete} aria-hidden="true"></i>
      <h3 className={`todo-title text ${isCompleted ? "complete" : "incomplete"}`}>{text}</h3>
      <i className="far fa-trash-alt delete-button" aria-hidden="true" onClick={deleteTodo}></i>
    </li>
    )
}


// export default Todo;
