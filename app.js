const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/hello', (req, res) => {
    res.json({message: 'Hello World'})
})

const PORT = proc.env.PORT || 8081

app.listen(3000, () => {
    console.log('Server is running...')
})
