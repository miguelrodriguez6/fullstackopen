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
      <Exercise name={props.parts[0][0]} exercises={props.parts[0][1]} />
      <Exercise name={props.parts[1][0]} exercises={props.parts[1][1]} />
      <Exercise name={props.parts[2][0]} exercises={props.parts[2][1]} />
    </>
  )


}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises}</p>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [['Fundamentals of React', 10], ['Using props to pass data', 7], ['State of a component', 14]]
  console.log(parts[0][1])
  return (
    <div>

      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts[0][1] + parts[1][1] + parts[2][1]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
