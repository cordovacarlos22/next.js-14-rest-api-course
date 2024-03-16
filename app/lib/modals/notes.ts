//? creates a new schema for Notes

// imports Schema,model,models from mongoose
import { Schema, model, models } from "mongoose";

// function to create new Note Schema 

const NoteSchema = new Schema({
  title:{type:String,required:true},
  description:{type:String},
  user:{type:Schema.Types.ObjectId,red :"User"}
});

// user models check if already exits if not it creates it  to then  export as User
const Note = models.note || model ("Note", NoteSchema);
export default Note; // export  userSchema  as User