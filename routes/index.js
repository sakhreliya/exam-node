const express = require('express');
const userRoutes = require('./user.routes');
const taskRoutes = require('./task.routes');
const categoryRoutes = require('./category.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
