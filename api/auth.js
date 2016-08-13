import jwt from 'jsonwebtoken';
import config from '../config/jwt';

// XXX: This should be a database of users :).
const users = [{
  id: 1,
  name: 'Ibrahim',
  email: 'baim@gmail.com',
  password: 'password1',
}];

function createToken(user) {
  return jwt.sign(user, config.secret, { expiresIn: 60 * 60 * 5 });
}

function authResources(router) {
  router.post('/auth/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send('You must send the email and the password');
    }

    const user = users.find((u) => u.email === req.body.email);

    if (!user) {
      return res.status(401).send('The username or password don\'t match');
    }

    if (user.password !== req.body.password) {
      return res.status(401).send('The username or password don\'t match');
    }

    return res.status(201).json({
      token: createToken({ email: user.email }),
      display_name: user.name,
    });
  });
}

export default authResources;
