import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ phrase }) => {
  return (
    <h1>{phrase}</h1>
  )
}

const StatisticsLine = ({ type, num }) => {
  return (
    <p>{type} {num}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  return (
    <>
      <StatisticsLine type='good' num={good} />
      <StatisticsLine type='neutral' num={neutral} />
      <StatisticsLine type='bad' num={bad} />
      <StatisticsLine type='all' num={total} />
      <StatisticsLine type='average' num={(good - bad) / (total)} />
      <StatisticsLine type='positive' num={good / total} />
    </>
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

  if (good + neutral + bad == 0) {
    return (
      <div>
        <Header phrase='give feedback' />
        <Button handleClick={handleClickGood} word='good' />
        <Button handleClick={handleClickNeutral} word='neutral' />
        <Button handleClick={handleClickBad} word='bad' />
        <Header phrase='statistics' />
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Header phrase='give feedback' />
      <Button handleClick={handleClickGood} word='good' />
      <Button handleClick={handleClickNeutral} word='neutral' />
      <Button handleClick={handleClickBad} word='bad' />
      <Header phrase='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
