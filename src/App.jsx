import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserList from './UserList';

function App() {
  const [count, setCount] = useState(0)

  // ES6+ examples
  const names = ['Alice','Bob','Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  const users = ['Alice','Bob','Charlie'];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      
      <UserList users={users} />

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>

      </div>
      
    </>
  )
}

export default App
