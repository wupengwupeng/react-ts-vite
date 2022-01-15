import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {MyRoutes} from './router/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MyRoutes/>
    </div>
  )
}

export default App
