import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, friend!');
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  } else {
    return console.log('OK');
  }
});
