import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({

    description:{
        type : String,
        required:true
    },
  category:{
        type: String,
        required: true
    },
    date:{
type:String,
required: true
    }

});
export const Task = mongoose.model('Task', taskSchema);
