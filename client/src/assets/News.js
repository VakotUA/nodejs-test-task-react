import React, { useState, useEffect } from 'react'
import timeout from './timeout'

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
    timeout(6000, fetch(`/api/0/10000/${props.index}`))
      .then((res) => res.json())
      .then((res) => {
        setNews(res)
      })
      .catch((e) => {
        console.error(e.message)
        setNews({
          title: 'Failed to load',
          url: '#',
          description: '',
          ptime: null,
        })
      })
  }, [props.index])

  return (
    <section className="newsBlock">
      <div className="theme">
        <a href={news ? news.url : '#'}>
          <h3>НАУКА И ТЕХНИКА</h3>
        </a>
        <p>{news ? (news.ptime ? toHHMMSS(news.ptime) : '') : 'Loading...'}</p>
      </div>
      <div className="content">
        <h1 className="title">{news ? news.title : 'Loading...'}</h1>
        <p className="news">{news ? news.description : 'Loading...'}</p>
      </div>
    </section>
  )
}

export default News
