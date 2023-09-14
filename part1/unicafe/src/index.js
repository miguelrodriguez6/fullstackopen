import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ phrase }) => {
  return (
    <h1>{phrase}</h1>
  )
}

const Statistics = ({ type, num }) => {
  return (
    <p>{type} {num}</p>
  )
}

const Button = ({ handleClick, word }) => {
  return (
    <button onClick={handleClick}>{word}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  let total = good + neutral + bad

  return (
    <div>
      <Header phrase='give feedback' />
      <Button handleClick={handleClickGood} word='good' />
      <Button handleClick={handleClickNeutral} word='neutral' />
      <Button handleClick={handleClickBad} word='bad' />
      <Header phrase='statistics' />
      <Statistics type='good' num={good} />
      <Statistics type='neutral' num={neutral} />
      <Statistics type='bad' num={bad} />
      <Statistics type='all' num={total} />
      <Statistics type='average' num={(good - bad) / (total)} />
      <Statistics type='positive' num={good / total} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
