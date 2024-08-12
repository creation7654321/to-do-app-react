import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handeSubmit =(e)=>{
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handeSubmit}>
        <input type="text" 
        className='todo-input' 
        value={value}
        placeholder='Write your task'
        onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}
