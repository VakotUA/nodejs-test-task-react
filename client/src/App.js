import React, { useState, useEffect } from 'react'
import News from './assets/News'
import Phrases from './assets/Phrases'

// Rough implementation. Untested.
function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('timeout'))
    }, ms)
    promise.then(resolve, reject)
  })
}

// timeout(1000, fetch('/hello'))
//   .then(function (response) {
//     // process response
//   })
//   .catch(function (error) {
//     // might be a timeout error
//   })

function App() {
  const [newsCount, setNewsCount] = useState(0)
  const [phrasesCount, setPhrasesCount] = useState(0)

  useEffect(() => {
    timeout(1000, fetch('/api/0/3000/length'))
      .then((res) => res.json())
      .then((res) => setNewsCount(res))
      .catch((e) => {
        console.log(e.message)
        setNewsCount(0)
      })

    timeout(1000, fetch('/api/1/3000/length'))
      .then((res) => res.json())
      .then((res) => setPhrasesCount(res))
      .catch((e) => {
        console.log(e.message)
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
          <h3>Не удалось загрузить новости</h3>
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
            <h2>Не удалось загрузить фразы</h2>
          )}
        </div>
      </section>
    </div>
  )
}

export default App
