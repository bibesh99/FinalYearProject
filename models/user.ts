import  { Schema, Document, Model, model } from 'mongoose';
const mongoose = require("mongoose");


interface User {
  userId:string;
  username: string;
  email: string;
  password: string;
  image:string

}

const userSchema = new Schema<UserDocument>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add more schema fields as needed
});

// Define a UserDocument interface which extends Document and represents a single user document
interface UserDocument extends User, Document {}

// Create a User model
const UserModel: Model<UserDocument> = model('User', userSchema);

export default UserModel;
