import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

export const comparePassword = async (inputPassword, password) => {
  return await bcrypt.compare(inputPassword, password);
};
