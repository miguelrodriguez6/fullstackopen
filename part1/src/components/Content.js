import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        total of {props.parts.reduce((accumulator, current) => {
          return accumulator + current.exercises; // Corregido para sumar la propiedad exercises
        }, 0)} exercises
      </p>
    </>
  )
}

export default Content;
