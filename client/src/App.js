import React, { useState, useEffect } from 'react'
import News from './assets/News'
import Phrases from './assets/Phrases'

function App() {
  const [newsCount, setNewsCount] = useState(0)
  const [phrasesCount, setPhrasesCount] = useState(0)

  useEffect(() => {
    fetch('/api/0/1000/length')
      .then((res) => res.json())
      .then((res) => setNewsCount(res))

    fetch('/api/1/3000/length')
      .then((res) => res.json())
      .then((res) => setPhrasesCount(res))
  }, [])

  return (
    <div className="app">
      <section className="newsSection">
        {Array.from(Array(newsCount)).map((_, index) => (
          <News key={index} index={index} />
        ))}
      </section>
      <section className="phrasesSection">
        <h3 className="keyword">Вместе с "привет" часто ищут</h3>
        <div className="phrasesBlock">
          {Array.from(Array(phrasesCount)).map((_, index) => (
            <Phrases key={index} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
