import React, { useState, useEffect } from 'react'
import timeout from './timeout'

function Phrases(props) {
  const [phrase, setPhrase] = useState()

  useEffect(() => {
    timeout(6000, fetch(`/api/1/7000/${props.index}`))
      .then((res) => res.json())
      .then((res) => {
        setPhrase(res.variant)
      })
      .catch(() => {
        setPhrase('Failed to load')
        // Write to log (╯°□°）╯︵ ┻━┻
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
