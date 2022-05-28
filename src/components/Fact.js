import React from 'react'

function getTitle(title, length) {
  let max = length > 60 ? 60 : length
  let min = length > 20 ? 20 : length

  return title.slice(0, Math.random() * (max - min) + min) + '...'
}

function Fact(props) {
  const theme = props.theme
  const fact = props.fact
  const length = props.length
  const title = getTitle(props.fact, props.length)

  return (
    <section className="fact_block">
      <span className="theme">
        <a href="https://catfact.ninja/fact" target="_blank" rel="noreferrer">
          <h3>{theme}</h3>
        </a>
        <p>{length}</p>
      </span>
      <h1 className="title">{title}</h1>
      <p className="fact">{fact}</p>
    </section>
  )
}

export default Fact
