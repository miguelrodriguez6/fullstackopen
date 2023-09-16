import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => (person.name === newName))) {
      alert(`${newName} already exists on your phonebook`)
    } else {
      const newPerson = { name: newName }
      setPersons([...persons, newPerson])
      setNewName('')
    }

  }

  const changeNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={changeNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}> {person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App