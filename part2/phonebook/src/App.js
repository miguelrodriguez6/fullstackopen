import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', telephone: 634543639 }
  ])
  const [newName, setNewName] = useState('')
  const [newTelephone, setNewTelephone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.some(person => (person.name === newName))) {
      alert(`${newName} already exists on your phonebook`)
    } else if ((persons.some(person => (person.telephone === newTelephone)))) {
      alert(`${newTelephone} already exists on your phonebook`)
    } else {
      const newPerson = { name: newName, telephone: newTelephone }
      setPersons([...persons, newPerson])
      setNewName('')
      setNewTelephone('')
    }

  }

  const changeNewName = (event) => {
    setNewName(event.target.value)
  }
  const changeNewTelephone = (event) => {
    setNewTelephone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={changeNewName} />
        </div>
        <div>
          telephone: <input value={newTelephone} onChange={changeNewTelephone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}> {person.name} {person.telephone}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
