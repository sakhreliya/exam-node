const { userSchema } = require("../model");

const register = (body) => {
  console.log(body, "service");
  return userSchema.create(body);
};

const findAllUsers = () => userSchema.find();

const findUserByEmail = (email) => userSchema.findOne({ email });

const deleteUserById = (id) => userSchema.findByIdAndDelete(id);

const updateUserById = (id, body) => userSchema.findByIdAndUpdate(id, body);

module.exports = {
  register,
  findAllUsers,
  findUserByEmail,
  deleteUserById,
  updateUserById,
};
