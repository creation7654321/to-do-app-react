import React, { useState } from 'react'

export default function EditTodoForm({editTodo,task}) {
    const [value, setValue] = useState(task.task)

    const handeSubmit =(e)=>{
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handeSubmit}>
        <input type="text" 
        className='todo-input' 
        value={value}
        placeholder='Update task'
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
