import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

const PORT = process.env.PORT || 3000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));

server.get('/', (req, res) => {
  fs.readFile('index.html', (err, content) => {
    res.send(content.toString());
  });
});

server.use('/api', api);

server.listen(PORT, () => {
  console.log(`The API is listening on port ${PORT}`);
});
