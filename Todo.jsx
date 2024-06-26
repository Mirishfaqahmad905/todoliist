import React, { useState } from 'react';
import { useEffect } from 'react';
import '../css/TodoList.css'
const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
    useEffect(()=>{
        const localStorageGetData=localStorage.getItem('todo')
         if(localStorageGetData){
            setTodo(JSON.parse(localStorageGetData));
         }
    },[]);
   useEffect(()=>{
      localStorage.setItem('todo',JSON.stringify(todo));
   },[todo])
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput(""); // Clear input field after adding
    }
  };
  const deleteTodo = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };
  return (
    <div style={{textAlign:'center', margin:500}} className='bg bg-red-300'>
      <input
        type="text"
        name='name'
        onChange={handleClick} // Changed from onClick to onChange
        value={input} // Added value to input field
        placeholder='enter your task'
      />
      <button onClick={addTodo}>Add Todo</button>
      <div className="container" style={{display:'flex',}}>
        {todo.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button style={{marginTop:23,marginLeft:23}} onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;