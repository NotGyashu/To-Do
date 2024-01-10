import { Task } from '../models/task.js';
import db from '../config/mongoose.js'

export const home = (req,res)=>{
   
        Task.find().then(function(todo){
            return res.render('home',{
                add : todo 
            })
        }).catch(function(err){
            console.log("Error in fetching Tasks from db",err)
        })
  }     

export const add = (req, res) => {
  Task.create({
    description: req.body["description"],
    category: req.body["Category"],
    date: req.body["date"],
  })
    .then(function (newData) {
      res.redirect("/"); // Redirect to the homepage
    })
    .catch(function (err) {
      console.log("err in creating db ", err);
      // Handle the error as needed
    });
};

export const Delete = async(req, res) => {
  try {
    const taskIdsToDelete = req.body; 
    const result = await Task.deleteMany({ _id: { $in: taskIdsToDelete } });

    return res.json({ success: true });;

  } catch (err) {
    console.log('Error deleting tasks:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }}
