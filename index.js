import express from 'express'
import { dirname } from 'path'   
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000
let count = 0 

app.get('/', (req, res) => {
    res.sendFile(`${dirname(fileURLToPath(import.meta.url))}/index.html`)
})

app.get('/content', (req, res) => {
    count++
    if (count > 5) {
        count = 0
        return res.status(286)
    }
    // If statement will stop request from client 

    res.send('<h2>Content from /content</h2>')
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})