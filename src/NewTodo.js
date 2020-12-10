import React from 'react'
import './NewTodo.css';

export default function NewTodo() {
    return (
        <div id="new-todo-wrapper">
            <form id="new-todo-form" class="text" onsubmit="submitTodo()">
                <label for="title-input" hidden></label>
                <input type="text" id="title-input" name="title-input" value="" placeholder="Title" />
                <label for="submit-button" hidden></label>
                <input type="submit" id="submit-button" name="submit-button" value="Submit" />
            </form>
        </div>
    )
}
