import { useState } from 'react'
import './App.css'
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'
import TaskState from './context/task/TaskState'


function App() {


  return (

    <div className="App">
      <h2>App MAIN</h2>
      <TaskState>
        <ListTask />
        <CreateTask />
      </TaskState>
    </div>

  )
}

export default App
