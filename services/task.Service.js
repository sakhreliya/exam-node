const { taskSchema } = require("../model");

const createTask = (body) => taskSchema.create(body);

const findAllTasks = () =>
  taskSchema.find().populate("assignedTo", "username");

const findTaskById = (id) => taskSchema.findById(id);

const updateTaskById = (id, body) => taskSchema.findByIdAndUpdate(id, body);

const deleteTaskById = (id) => taskSchema.findByIdAndDelete(id);

module.exports = {
  createTask,
  findAllTasks,
  findTaskById,
  updateTaskById,
  deleteTaskById,
};
