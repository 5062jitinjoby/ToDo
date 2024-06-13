import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEdit,setisEdit] = useState(-1)
  const [isUnique, setisUnique] = useState(true)

  const addTodo = () => {
    if (todo.trim()) {
      console.log(isEdit); 
      if(isEdit!== -1){
        todos.forEach((t)=>{if(t.text==todo){setisUnique(!isUnique)}})
        console.log(isUnique)  
        if(isUnique){
          todos[isEdit]={text:todo,completed:false}
          setTodos([...todos])
          setTodo("");
        } 
        setisUnique(!isUnique)
        setTodo("");
        console.log(isUnique)

      }else{
        todos.forEach((t)=>{if(t.text==todo){setisUnique(!isUnique)}})
          if(isUnique){
            setTodos([...todos, { text: todo, completed: false }]);
            setTodo("");
          }
          setisUnique(!isUnique)
      }
      setisEdit(-1)
      
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const edit = (index) =>{
    let todoToEdit = todos.filter((_, i) => i == index )
    console.log(todoToEdit)
    setisEdit(index)
    setTodo(todoToEdit[0].text)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index} className={item.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(index)}>{item.text}</span>
              <button onClick={() => removeTodo(index)}>x</button>
              <button onClick={() => edit(index)}>edit</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

