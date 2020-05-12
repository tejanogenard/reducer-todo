import React from 'react'
import TodoTask from './TodoTask'

const TodoList = ({ todos =[], onCompletion}) => {

    return(
        <section className="TaskList">
        <h2>Task List ({todos.length})</h2>
        {todos.map(task => (
          <TodoTask key={task.id} task={task} onCompletion={onCompletion} />
        ))}

      </section>
    )
}
export default TodoList