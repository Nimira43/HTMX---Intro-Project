import express from 'express'
import { dirname } from 'path'   
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000
// let count = 0 

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`))

app.get('/', (req, res) => {
    res.sendFile(`${dirname(fileURLToPath(import.meta.url))}/index.html`)
})

app.get('/indicator', (req, res) => {
    setTimeout(() => {
        res.send('<h2>Request Indicator</h2>')
    }, 3000)
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})