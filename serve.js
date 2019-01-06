const express = require('express')
const app = express()

app.use(express.static('dist', { extensions: ["html"] }))

const port = 80;
app.listen(port, () => console.log('serving on port ' + port))