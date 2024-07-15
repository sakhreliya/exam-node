const Task = require('../models/task.model');

const addTask = async (req, res) => {
  try {
    const task = new Task({ ...req.body, userId: req.user.userId });
    await task.save();
    res.status(201).json({ message: 'Task added successfully', task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.status(200).json({ message: 'Tasks retrieved successfully', tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted successfully', task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addTask, getAllTasks, updateTask, deleteTask };
