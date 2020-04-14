import React from 'react'
import todoTask from './todoTask'

const todoList = ({ todolist =[], onCompletion}) => {
    return(
        <section className="TaskList">
        <h2>Task List ({todolist.length})</h2>
        {todolist.map(task => (
          <Grudge key={task.id} grudge={task} onCompletion={onCompleted} />
        ))}
      </section>
    )
}
export default todoList