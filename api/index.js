import express from 'express';
import jwt from 'express-jwt';
import config from '../config/jwt';
import authResources from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    version: '1.0',
    author: 'cahsowan',
  });
});

router.get('/fruits', jwt({ secret: config.secret }), (req, res) => {
  res.json(['apple', 'banana', 'grape', 'melon']);
});

router.get('/wrong-req-sample', (req, res) => {
  res.status(401).json({
    msg: 'Oh no...',
  });
});

// AUTH RESOURCES
authResources(router);

export { router as default };
