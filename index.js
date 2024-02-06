//console.log('my first project')
require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('hello backend')
})
app.get('/login',(req, res)=>{
    res.send('<h1>this is my login page</h1>')
})
app.get('/signup',(req, res)=>{
    res.send('<button>signUp</button>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})