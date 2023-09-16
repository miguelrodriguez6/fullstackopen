import React, { useState } from "react";

const AddContact = (props) => {

  const [newName, setNewName] = useState('')
  const [newTelephone, setNewTelephone] = useState('')

  const changeNewName = (event) => {
    setNewName(event.target.value)
  }
  const changeNewTelephone = (event) => {
    setNewTelephone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (props.persons.some(person => (person.name === newName))) {
      alert(`${newName} already exists on your phonebook`)
    } else if ((props.persons.some(person => (person.telephone === newTelephone)))) {
      alert(`${newTelephone} already exists on your phonebook`)
    } else {
      const newPerson = { name: newName, telephone: newTelephone }
      props.changePersons(newPerson)
      setNewName('')
      setNewTelephone('')
    }

  }

  return (
    <>
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
    </>
  )
}

export default AddContact