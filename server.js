const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const proxy = require('http-proxy-middleware');


const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}))

// '/:movieId', 

app.use(express.static(__dirname));

app.use('/movie', proxy({
    target: 'http://18.224.238.238'
}));

app.use('/movies', proxy({
    target: 'http://107.21.131.157'
}));

app.use('/critics', proxy({
    target: 'http://18.219.96.110'
}))

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});