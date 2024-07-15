const express = require('express');
const { addTask, getAllTasks, updateTask, deleteTask } = require('../controllers/task.controller');
const { isLogin, isRestrict } = require('../middleware/auth');

const router = express.Router();

router.post('/add', isLogin, isRestrict(['admin', 'user']), addTask);
router.get('/all', isLogin, isRestrict(['admin', 'user']), getAllTasks);
router.put('/update/:id', isLogin, isRestrict(['admin', 'user']), updateTask);
router.delete('/delete/:id', isLogin, isRestrict(['admin']), deleteTask);

module.exports = router;
