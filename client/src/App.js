import React, { useState, useEffect } from 'react'
import News from './assets/News'
import Phrases from './assets/Phrases'
import timeout from './assets/timeout'

function App() {
  const [newsCount, setNewsCount] = useState(0)
  const [phrasesCount, setPhrasesCount] = useState(0)

  useEffect(() => {
    timeout(1000, fetch('/api/0/2000/length'))
      .then((res) => res.json())
      .then((res) => setNewsCount(res))
      .catch((e) => {
        console.error(e.message)
        setNewsCount(0)
      })

    timeout(1000, fetch('/api/1/2000/length'))
      .then((res) => res.json())
      .then((res) => setPhrasesCount(res))
      .catch((e) => {
        console.error(e.message)
        setPhrasesCount(0)
      })
  }, [])

  return (
    <div className="app">
      <section className="newsSection">
        {newsCount > 0 ? (
          Array.from(Array(newsCount)).map((_, index) => (
            <News key={index} index={index} />
          ))
        ) : (
          <h2>Не дождались новостей</h2>
        )}
      </section>
      <section className="phrasesSection">
        <h3 className="keyword">
          {phrasesCount ? 'Вместе с "привет" часто ищут' : ''}
        </h3>
        <div className="phrasesBlock">
          {phrasesCount > 0 ? (
            Array.from(Array(phrasesCount)).map((_, index) => (
              <Phrases key={index} index={index} />
            ))
          ) : (
            <h2>Не дождались фраз</h2>
          )}
        </div>
      </section>
    </div>
  )
}

export default App
