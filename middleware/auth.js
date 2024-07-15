const jwt = require('jsonwebtoken');

const createToken = (data) => {
  return jwt.sign(data, process.env.SECRET, { expiresIn: '1h' });
};

const isLogin = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error('Not authenticated');
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const isRestrict = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};

module.exports = { createToken, isLogin, isRestrict };
