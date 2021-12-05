import './App.css';
import { Button, Input } from './components';
import {useState,createContext} from 'react';

export const GlobalTheme = createContext()
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [themeDark, setTheme] = useState(false);
  
  
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
    console.log("das")
  }

  const deleteAll =()=>{
    setTodos([])
  }
  
  const themeChange = ()=>{
    themeDark === false ? setTheme(true) : setTheme(false)
  }
  return (
    <GlobalTheme.Provider value={themeDark}>
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter value" />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={deleteAll}>Delete All</Button>
      <ul>
        {todos.map((v, i) => {
          return <li key={i}>{v} <Button onClick={() => deleteTodo(i)}>Delete</Button></li>
        })}
      </ul>
      {themeDark ? <p>Dark</p> : <p>Light</p>}
      <button onClick={themeChange}>change theme</button>
    </div>
    </GlobalTheme.Provider>
  )
}


export default App;
