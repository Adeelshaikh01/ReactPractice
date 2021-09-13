// import logo from './logo.svg';
import './App.css';
import PostRender from './Posts';
import UserRender from './User'

function Name() {
  const name = "Hello World";
  return <h1>Name: {name}</h1>
}

function Obj() {
  const obj = { name: "Hello World Object" }
  return <p>Obj: {obj.name}</p>
}

function Data() {
  const data = ['We', 'are', 'United']
  return (
    <div>
      <h1>Data</h1>
      <ol>
        {data.map((items, index) => {
          return <li key={index}>{items}</li>
        })}
      </ol>
    </div>
  )
}

function List() {
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
  return (
    <div>
      <h1>List</h1>
      {list.map((items, index) => {
        return <p key={index}>{items.name}</p>
      })}
    </div>
  )
}

function Complex() {
  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]
  return (
    <div>
      <h1>Complex</h1>
      {complex.map((items, index) => {
        let [jobs1, jobs2] = items.jobs;
        return <div>
          <h1 key={index}>{items.company}</h1>
          <ul>
            <li key={index++}>{jobs1}</li>
            <li key={index}>{jobs2}</li>
          </ul>
        </div>

      })}
    </div>
  )
}


function App() {
  return (
    <div>
      <Name />
      <hr />
      <Obj />
      <hr />
      <Data />
      <hr />
      <List />
      <hr />
      <Complex />
      <hr />
      <PostRender />
      <hr />
      <UserRender />
    </div>
  );
}

export default App;
