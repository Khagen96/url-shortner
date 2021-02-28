const express = require('express');
const api = require('./api');
const app = express();
const port = process.env.PORT || 3000;

const { urls } = require('./urlData');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use('/api', api);


app.get('/u/:id', (req, res) => {
  const longUrl = urls[req.params.id];
  if (longUrl) {
      res.redirect(longUrl);
  } else {
      res.status(404).send();
  }
});


app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
