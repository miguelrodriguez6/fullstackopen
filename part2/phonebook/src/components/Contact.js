import React from "react";

const Contact = ({ persons, nameFilter }) => {
  return (
    <>
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
    </>

  )
}

export default Contact