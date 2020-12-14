import React, { useState } from 'react'
import './NewTodo.css';

export default function NewTodo({todos, onSubmit}) {
    const[title, setTitle] = useState("")

    const handleTitleInput = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        // onSubmit([])
        // make api request
        const apiKey = "c4113f-42d6e9-f6658d-929da1-0a9677"
        const data = {
            text: title
        }
        const xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                //successfully uploaded todo
                const todo = JSON.parse(this.responseText);
                // add to ui
                setTitle("")
                todos.push(todo)
                //I dont know why this fixed it but it did
                onSubmit([])
                onSubmit(todos)
            } else if (this.readyState === 4) {
                //error from server
                console.log(this.responseText);
            }
        };
        xhttp.open("POST", "https://cse204.work/todos", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("x-api-key", apiKey);
        xhttp.send(JSON.stringify(data));
    }

    

    return (
        <div id="new-todo-wrapper">
            <form id="new-todo-form" className="text" onSubmit={handleSubmit}>
                <label htmlFor="title-input" hidden></label>
                <input type="text" id="title-input" name="title-input" value={title} placeholder="Title" onChange={handleTitleInput} />
                <label htmlFor="submit-button" hidden></label>
                <input type="submit" id="submit-button" name="submit-button" value="Submit" />
            </form>
        </div>
    )
}
