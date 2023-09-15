import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


const Exercise = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}



const Part = (props) => {
  return (
    <>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
