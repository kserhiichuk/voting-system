import { Session } from '../models/session.js';

const verifySession = async (req, res, next) => {
  const tokenString = req.headers['authorization'];
  const token = tokenString && tokenString.split(' ')[1];
  if (!token) {
    return res.status(401).send('Error: empty token. Please log in.');
  }
  let session = await Session.fetchByToken(token);
  if (!session || session.expires_at < Date.now()) {
    return res.status(401).send('Error: expired session. Please log in again.');
  }
  req.userId = session.userId;
  next();
};

export default verifySession;
