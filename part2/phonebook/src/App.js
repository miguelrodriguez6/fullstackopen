import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newTelephone, setNewTelephone] = useState('')
  const [nameFilter, setNameFilter] = useState('')

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

  const changeFilter = (event) => {
    setNameFilter(event.target.value)
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
      <h3>filter by name</h3>
      <div>
        filter shown with: <input value={nameFilter} onChange={changeFilter} />
      </div>
      <h3>add a new contact</h3>
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
        {persons.map((person, index) => {
          const nameInLowerCase = person.name.toLowerCase();
          const nameFilterInLowerCase = nameFilter.toLowerCase();

          if (nameFilter === '' || nameInLowerCase.includes(nameFilterInLowerCase)) {
            return <li key={index}> {person.name} {person.telephone}</li>;
          }

          return null;
        })}
      </ul>


    </div>
  )
}

export default App
