//? creates a new schema for users


// imports Schema,model,models from mongoose
import { Schema,model,models } from "mongoose"; 

// function to create new user Schema 

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// user models check if already exits if not it creates it  to then  export as User
const User =  models.User || model("User", UserSchema);
export default User;  // export  userSchema  as User