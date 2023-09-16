import React, { useState } from 'react'
import Contact from './Contact'
import Filter from './Filter'
import AddContact from './AddContact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])


  const [nameFilter, setNameFilter] = useState('')

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const changePersons = (person) => {
    return (
      setPersons([...persons, person])
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} onFilterChange={handleFilterChange} />
      <AddContact changePersons={changePersons} persons={persons} />
      <Contact persons={persons} nameFilter={nameFilter} />
    </div>
  )
}

export default App
