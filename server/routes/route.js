import express from 'express'
import { registerUser } from '../controller/userController.js';
import { loginUser } from '../controller/userController.js';
import { createBlog } from "../controller/blogController.js";
// import { getBlog } from '../controller/blogController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', createBlog);
// router.get('/getBlog', getBlog);



export default router;