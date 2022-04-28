const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()
const PORT = 4000

const staticPath = path.resolve(process.cwd(), '..', 'static')

app.get('/getImage', (req, res) => {
  const {fileName} = req.query

  if (!fileName) {
    // res.writeHead(404, 'Current password does not match', {'content-type': 'text/plain'})
    res.status(404)
      .json({
        error: 'fileName 参数必须'
      })
    return
  }

  const fileUrl = `${staticPath}/${fileName}`

  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', '*')

  res.writeHead(200, {
    'Content-Type': 'image/png'
  })

  const buffer = fs.readFileSync(fileUrl)

  res.end(buffer)
})

app.listen(PORT, () => {
  const blank = ''.padStart(1)

  console.log(
    '\n',
    blank,
    '🚀🚀🚀',
    '\x1b[32m',
    'Backend Server running at:\n',
    '\x1b[0m'
  )
  console.log(
    blank,
    '> Local:  ',
    '\x1b[36m',
    `http://localhost:${PORT}/`,
    '\x1b[0m'
  )
})
