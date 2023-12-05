import mongoose from "mongoose";
import { User } from "next-auth";
import bcrypt from "bcrypt";

type LoginFn = (username: string, password: string) => Promise<User>;

export const login: LoginFn = async (username, password) => {
  try {
    const userModel = mongoose.model("User"); 

    // Find the user by email
    const user = await userModel.findOne({ email: username });

    if (user) {
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Remove the password field from the user object before returning it
        user.password = "";
        return user;
      }
    }
    
    throw new Error("User Not Found or Incorrect Password");
  } catch (error) {
    throw error;
  }
};
