import React from 'react'

export const Todo = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.description}</p>
      <button onClick={() => {props.onDelete(props.todo)}} className='btn btn-sm btn-danger'>Delete</button>
      <hr />
    </div>
  )
}
