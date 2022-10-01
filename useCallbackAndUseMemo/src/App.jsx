import { useState, useEffect, useMemo } from 'react'
import './App.css'
import ListUsers from './components/ListUsers'
const initialUsers = [
  {
    id: 1,
    name: "santy"
  },
  {
    id: 2,
    name: "Herman"
  }
]

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log("app render")
  })

  const handleClickAdd = () => {
    console.log("adding")
    const newUser = { id: Math.random() * 222, name: text }
    setUsers([...users, newUser])
  }

  const userFilter = useMemo(() =>
    users.filter(u => {
      console.log("filetr")
      return u.name.toLowerCase().includes(search)
    })
    , [search, users])

  const handleClickSearch = () => {
    console.log("searching")
    setSearch(text)
  }

  return (
    <div className="App">

      <h1>App</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClickAdd} >Add</button>
      <button onClick={handleClickSearch} >Search</button>
      <ListUsers users={userFilter} />
    </div>
  )
}

export default App
