const Category = require('../models/category.model');

const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ message: 'Category added successfully', category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: 'Categories retrieved successfully', categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Category updated successfully', category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Category deleted successfully', category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addCategory, getAllCategories, updateCategory, deleteCategory };
