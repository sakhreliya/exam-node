const express = require('express');
const { register, login, logout } = require('../controllers/auth.controller');
const { isLogin, isRestrict } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', isLogin, logout);

module.exports = router;
