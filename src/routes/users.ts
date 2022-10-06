/**
 * /new para criar um novo usuario
 * /list para listar todos os usuarios
 */
import express from 'express';
import UserController from '../controllers/UserControllers';
const userRoutes = express.Router();

userRoutes.post('/new', UserController.create);
userRoutes.put('/update', UserController.update);
userRoutes.get('/list', UserController.index);
userRoutes.post('/find', UserController.findOne);
userRoutes.post('/delete', UserController.delete);

export default userRoutes;
