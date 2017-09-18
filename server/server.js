const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const path = require ('path');
const db = require ('../database/dbconfig.js')
const router = require('../server/router/router.js')
//need router
//need dbconfig

const ip = 'localhost';
const port = 3000;

const app = express();
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:true}))
  .use(morgan('dev'))
  //add router later then test using postman
  .use('/api', router);
app.use(express.static(path.join(__dirname, '../client/static')));


app.listen(port, ip, () => {
  console.log('congrats server established');
})