import jwt from 'jsonwebtoken';

export default function checkAuth(req, res, next) {
  const token = req.headers.authorization.replace('Bearer', '') || '';

  if (!token) return res.status(401).send({ message: 'Нет доступа' });

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = id;
    next();
  } catch (e) {
    res.status(401).send({ message: 'Нет доступаffff' });
  }
}
