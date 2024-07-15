const { userSchema } = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (email, password) => {
  const user = await categorySchema.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: user._id, role: user.role }, "jwtsecret", {
    expiresIn: "1h",
  });

  return token;
};

module.exports = {
  loginUser,
};
