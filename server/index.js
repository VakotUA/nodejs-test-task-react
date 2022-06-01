const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.route('/').get((req, res) => {
  res
    .status(200)
    .send(
      '<h1>Hello there</h1>' +
        '<a href="http://localhost:3001/api/0/100/length">http://localhost:3001/api/[variant]/[maxTimeout]/length</a>' +
        '<br>' +
        '<a href="http://localhost:3001/api/0/100/2">http://localhost:3001/api/[variant]/[maxTimeout]/[position]</a>'
    )
})
app.use('/api', require('./routes/variants'))

app.listen(PORT, () => {
  console.log(`Server has been run on port ${PORT}`)
})

module.exports = app
