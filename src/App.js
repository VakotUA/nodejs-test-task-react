import React from 'react'
import Fact from './components/Fact'

function loadDataFromAPI(count) {
  const dataList = []

  for (let i = 0; i < count; i++) {
    let data = loadData('https://catfact.ninja/fact')
    console.log(data)

    if (data != null) dataList.push(data)
    else dataList.push({ fact: 'Failed to load', length: 0 })
  }

  return dataList
}

function loadData(url) {
  let xml = new XMLHttpRequest()

  xml.open('GET', url, false)
  xml.send(null)

  return JSON.parse(xml.responseText)
}

function App() {
  const facts = loadDataFromAPI(10)

  return (
    <div className="facts">
      {facts.map((fact, index) => {
        return (
          <Fact
            key={index}
            fact={fact.fact}
            length={fact.length}
            theme="Cat fact"
          />
        )
      })}
    </div>
  )
}

export default App
