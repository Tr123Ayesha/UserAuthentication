import mongoose, { Schema, Document } from 'mongoose';

// Define an interface for User Document
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
}

// Define the User schema
const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
});

// Export the model and attach it to the 'users' collection
const User = mongoose.model<IUser>('User', UserSchema);
export default User;
