import React, { useState } from 'react'

const NewTodo = ({onSubmit}) => {
    const [task, setTask] = useState('')
    const [details, setDetails] = useState('')


    const handleChange = e =>{
        e.preventDefault()
        onSubmit({task, details})
    }

    return(
        <form className = "newTodo" onSubmit={handleChange} >
            <input
                clasName = "newTask-input"
                placeholder = "task"
                type = "text" 
                value = {task}
                onChange = {e => setTask(e.target.value)}
            />
            <input
                className = "details-input"
                placeholder = "task details"
                type = "text"
                value = {details}
                onChange = { e => setDetails(e.target.value)}
            />
            <input className = "newTask-button" type = "submit" />
        </form>
    )
}
export default NewTodo