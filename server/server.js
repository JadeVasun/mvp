const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('../Database/dbconfig')
const router = require('../Server/Router/router')

const port = 3000;
const ip = 'localhost';

const app = express();

app 
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(morgan('dev'))
  .use('/api', router)
app.use(express.static(path.join(__dirname, '../Client/static')))

app.listen(port, ip, () => {
  console.log("listen up!")
})