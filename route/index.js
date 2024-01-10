import express from 'express';
import mongoose from "mongoose";
const router  = express.Router();
import  {add, home,Delete} from '../controllers/home_controller.js';
console.log("router loaded");
router.get('/',home);
router.post('/add-work',add);
router.delete("/delete",express.json(),Delete)
export default router;