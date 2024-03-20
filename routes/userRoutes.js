import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/users', userController.createUser);

router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.put('/users/:id', userController.updateUserById);

router.delete('/users/:id', userController.deleteUserById);

export default router;
