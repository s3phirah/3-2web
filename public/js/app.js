const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('11');
});

app.listen(port, () => {
  console.log(`Connected ${port}`)
});