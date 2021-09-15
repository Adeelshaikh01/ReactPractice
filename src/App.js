import './App.css';
import { Button, Input } from './components';
import {useState} from 'react';


function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    let arr = [...todos];
    arr.push(value)
    setTodos(arr)
    setValue("")
  }

  const deleteTodo = (i) => {
    let arr = [...todos];
    arr.splice(i, 1)
    setTodos(arr)
  }

  const deleteAll =()=>{
    setTodos([])
  }
  
  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter value" />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={deleteAll}>Delete All</Button>
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v} <Button onClick={() => deleteTodo(i)}>Delete</Button></li>
        })}
      </ul>
    </div>
  )
}


export default App;
