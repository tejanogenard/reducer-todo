import React, {useReducer}from 'react'
import id from 'uuid/v4'
 import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import initialState from './components/initialState'

//Actions 

const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
const CLEAR_TODO = "CLEAR_TODO"

//Reducer 

const reducer = (state, action) => {
  switch(action.type){
    case ADD_TODO:
      return[
        action.payload,   
        ...state,          
      ]
      case TOGGLE_TODO:
        return state.map(task => {
          if(task.id !== action.payload.id) return task
          return{...task, completed: !task.completed}
        })
      case CLEAR_TODO:
        console.log("SOJSDKHSD",action)
        return state.filter(task => task.completed === false)
        default:
          return state
    }
  }

const App = () => {
const [todos, dispatch] = useReducer(reducer, initialState)


const addTodo = ({task, details}) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      task,
      details,
      completed: false,
      id:id()
    }
  },[dispatch])
}

const toggleTodo = id => {
  dispatch({
    type: TOGGLE_TODO,
    payload: {id}
  },[dispatch])
}


return(
  <div className = "app">
    <NewTodo  onSubmit = {addTodo}/>
    <TodoList todos={todos} onCompletion={toggleTodo}/>
    <button onClick={() => dispatch({ type: CLEAR_TODO, payload: { id }})}>Clear All</button>
  </div>
  )
}
export default App 