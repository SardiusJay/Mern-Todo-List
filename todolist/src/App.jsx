import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'

function App() {
    const [todos, setTodos, ] = useState
  

  return (
    <div>

      <h2>Todo List</h2>
      <Home />
      <Create />
    
    </div>
   
  )
}

export default App
