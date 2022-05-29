import React, { useState, useEffect } from 'react'

function toHHMMSS(number) {
  let date = new Date(number * 1000)

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month

  return day + '/' + month + '/' + year
}

function News(props) {
  const [news, setNews] = useState()

  useEffect(() => {
    fetch(`/api/0/7000/${props.index}`)
      .then((res) => res.json())
      .then((res) => {
        setNews(res)
      })
  }, [props.index])

  return (
    <section className="newsBlock">
      <div className="theme">
        <a href={news ? news.url : '#'} target="_blank" rel="noreferrer">
          <h3>НАУКА И ТЕХНИКА</h3>
        </a>
        <p>{news ? toHHMMSS(news.ptime) : 'Loading...'}</p>
      </div>
      <div className="content">
        <h1 className="title">{news ? news.title : 'Loading...'}</h1>
        <p className="news">{news ? news.description : 'Loading...'}</p>
      </div>
    </section>
  )
}

export default News
