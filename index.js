import express from 'express'
import { dirname } from 'path'   
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(`${dirname(fileURLToPath(import.meta.url))}/index.html`)
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})