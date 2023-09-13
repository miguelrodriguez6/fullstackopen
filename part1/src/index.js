import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )

}

const Exercise = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Exercise name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Exercise name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Exercise name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )


}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>

      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.reduce((total, part) => total + part.exercises, 0)} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
