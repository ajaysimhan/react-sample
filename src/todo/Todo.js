import React from 'react'


function Todo(props) {
    return(
        <div>
            <input 
                type="checkbox" 
                onChange={() => props.handleClick(props.todoItem.id)}
                checked={props.todoItem.isCompleted}    
            />
            <p>{props.todoItem.description}</p>
        </div>
    )
}

export default Todo