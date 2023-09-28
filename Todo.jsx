import React, { useEffect, useRef, useState } from 'react';
import { AiFillDelete } from "react-icons/ai"

const Todo = () => {
    const [todo , setTodo]=useState('')
    const [todos,setTodos]=useState([])
    
    const handleSubmit = (e) =>{
        e.preventDefault();


    }
    const addTodo= () =>{
        setTodos([...todos, {list : todo, id :Date.now()}])
        console.log (todos)
        setTodo('')
    }
    const inputRef=useRef('null')
    useEffect(()=>{
        inputRef.current.focus();
    })
    const onDelete= (id) =>{
        setTodos   (todos.filter((to)=> to.id !==id)) 
    }


  return (
    <div align='left'className='todo-app' >
    
      <h2>ToDo</h2>
      <div className='todo-in'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={todo} ref={inputRef} placeholder='Enter your todo' onChange={(event)=>setTodo(event.target.value)}/>
        <button onClick={addTodo}>Add</button>
        </form>
        </div>
        <div>
             <ul align='left'className='task-list'>
                {
                todos.map((to) =>(

                <li>{todo}
                <div>{to.list}</div>
                <span style={{color:'red'} }>
                    <AiFillDelete onClick={()=>onDelete(to.id)}/>
                </span>
                </li>
                
                
                ))
}
            </ul>
        
        </div>

    
    </div>
  );
}

export default Todo;
