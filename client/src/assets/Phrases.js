import React, { useState, useEffect } from 'react'

function Phrases(props) {
  const [phrase, setPhrase] = useState()

  useEffect(() => {
    fetch(`/api/1/3000/${props.index}`)
      .then((res) => res.json())
      .then((res) => {
        setPhrase(res)
      })
  }, [props.index])

  return (
    <span className="phrase">
      <a href={`http://localhost:3001/api/1/1000/${props.index}`}>
        {phrase ? phrase : 'Loading...'}
      </a>
    </span>
  )
}

export default Phrases
