import jwt from 'jsonwebtoken';

export default function checkAuth(req, res, next) {
  const token = req.headers.access_token;

  if (!token) {
    return res.status(401).json({ access: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .clearCookie('access_token')
        .status(401)
        .json({ access: false });
    }

    req.userId = user?.id;

    next();
  });
}
