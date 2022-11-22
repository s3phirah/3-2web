const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;


app.locals.pretty = true;
app.use(bodyParser.urlencoded({ extended: false}));
app.set('views', './views_file') // 기본값
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/singin', function (req, res) {
  fs.readdir('data', function (err, files) {
    if(err){
      console.log(err);
      res.status(500).send('Server Error');
    }
    else
    res.render('singin', {topics:files});
  })
});

app.get('/topic/:id', function(req, res) {
  var id = req.params.id;
  fs.readFile('data/'+id, 'utf-8', function(err, data) {
    if(err){
      console.log(err);
      res.status(500).send('Server Error');
    }
    else
    res.send(data);
  })
})
app.post('/topic', function(req, res){
  res.send('hi, post');
})

app.listen(port, () => {
  console.log(`Connected ${port}`)
});

// nodemon 적용 npm run dev
