const express = require('express');
const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../controllers/category.controller');
const { isLogin, isRestrict } = require('../middleware/auth');

const router = express.Router();

router.post('/add', isLogin, isRestrict(['admin', 'user']), addCategory);
router.get('/all', isLogin, isRestrict(['admin', 'user']), getAllCategories);
router.put('/update/:id', isLogin, isRestrict(['admin', 'user']), updateCategory);
router.delete('/delete/:id', isLogin, isRestrict(['admin']), deleteCategory);

module.exports = router;
