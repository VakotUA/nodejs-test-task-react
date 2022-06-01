const express = require('express')
const router = express.Router()

const variants = [
  require('../assets/news.json'),
  require('../assets/phrases.json'),
]

function calculateTimeout(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

router.use((req, res, next) => {
  console.log(req.url, '@', Date.now())
  next()
})

router.route('/:variant/:maxTimeout/length?').get((req, res) => {
  let timeout = calculateTimeout(0, req.params.maxTimeout)

  setTimeout(() => {
    res.status(200).send({ length: variants[req.params.variant].length })
  }, timeout)
})

router.route('/:variant/:maxTimeout/:position?').get((req, res) => {
  let timeout = calculateTimeout(0, req.params.maxTimeout)

  setTimeout(() => {
    res
      .status(200)
      .send({ variant: variants[req.params.variant][req.params.position] })
  }, timeout)
})

module.exports = router
