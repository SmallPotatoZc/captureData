const express = require('express')
const app = express()

let num = 0;

app.get('/', express.static(__dirname + '/index.html'));

app.get('/test', (req, res) => {
  res.send('' + num++)
})

app.listen(9001)