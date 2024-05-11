import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'

function App() {

  return (
    <div>

      <h2>Todo List</h2>
      <Home />
      <Create />
    
    </div>
   
  )
}

export default App
