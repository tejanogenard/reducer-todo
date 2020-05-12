import React from 'react'

const TodoTask = ({task, onCompletion}) => {
    const completed = () => onCompletion(task.id)
    return(
        <article className="todoTask">
        <h3>{task.task}</h3>
        <p>{task.details}</p>
        <div className="todo-controls">
          <label className="todo-completed">
            <input type="checkbox" checked={task.completed} onChange={completed} />{' '}
            Completed
          </label>
        </div>
      </article>
    )
}
export default TodoTask