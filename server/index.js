const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

const variants = [
  [
    {
      title: 'Ученые предупредили об опасности, угрожающей 800 млм человек',
      url: 'http://site.com',
      description:
        'Зонд Mars Odyssey получил первые инфракрасные фотографии Фобоса, одной из двух лун Марса, которые помогут ученым понять, когда она окончательно распадется на части.',
      ptime: 1509107290,
    },
    {
      title: 'Япония запустила новый спутник для создания собственной GPS',
      url: 'http://site2.com',
      description:
        'Япония запустила во вторник свой четвертый спутник для создания собственной системы GPS высокой точности «Митибики-4» с космодрома Танэгасима.',
      ptime: 1510107290,
    },
    {
      title: 'Ученые предупредили об опасности, угрожающей 800 млм человек',
      url: 'http://site.com',
      description:
        'Зонд Mars Odyssey получил первые инфракрасные фотографии Фобоса, одной из двух лун Марса, которые помогут ученым понять, когда она окончательно распадется на части.',
      ptime: 1511107290,
    },
    {
      title: 'Япония запустила новый спутник для создания собственной GPS',
      url: 'http://site2.com',
      description:
        'Япония запустила во вторник свой четвертый спутник для создания собственной системы GPS высокой точности «Митибики-4» с космодрома Танэгасима.',
      ptime: 1512107290,
    },
  ],
  [
    'привет от катюши',
    'привет билайн ру',
    'фильм привет от катюши',
    'privet beeline ru',
    'привет от катюши смотреть',
    'билайн привет',
    'приветствие',
  ],
]

function calculateTimeout(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

app.get('/api/:variant/:maxTimeout/:position?', (req, res) => {
  let timeout = calculateTimeout(0, req.params.maxTimeout)

  setTimeout(() => {
    let variant = variants[req.params.variant]
    res.json(variant[req.params.position])
  }, timeout)
})

app.get('/api/:variant/:maxTimeout/length?', (req, res) => {
  let timeout = calculateTimeout(0, req.params.maxTimeout)

  setTimeout(() => {
    let variant = variants[req.params.variant]
    res.json(variant.length)
  }, timeout)
})

app.listen(PORT, () => {
  console.log(`Server has been run on port ${PORT}`)
})
