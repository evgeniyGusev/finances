import jwt from 'jsonwebtoken';

export default function checkAuth(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ access: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, { id }) => {
    console.log(id);
    if (err) {
      return res.status(401).json({ access: false });
    }

    req.userId = id;

    next();
  });
}