/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require('../database/mongo/index.js');

const router = require('./router.js');

const server = express();
const port = process.env.PORT || 3003;

server.use(cors());
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, '../public')));

server.use('/loaderio-hash', (req, res) => {
  res.status(200).send('loaderio-hash')
});
server.use('/api', router);

server.listen(port, () => console.log(`Connected on port ${port}`));
