import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
  return bcrypt.hash(password, 10);
};

export const checkPassword = async (userPass, password) => {
  return bcrypt.compareSync(password, userPass);
};
