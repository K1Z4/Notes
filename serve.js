const express = require('express')
const app = express()

app.use(express.static('dist', { extensions: ["html"] }))

app.listen(8081, () => console.log('serving'))