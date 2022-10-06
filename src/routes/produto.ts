/**
 * /new para criar um novo usuario
 * /list para listar todos os usuarios
 */
 import express from 'express';
 import produtoController from '../controllers/userControlerProduto';
 const produtoRoutes = express.Router();
 
 produtoRoutes.post('/new', produtoController.create);
 produtoRoutes.put('/update', produtoController.update);
 produtoRoutes.get('/list', produtoController.index);
 produtoRoutes.post('/find', produtoController.findOne);
 produtoRoutes.post('/delete', produtoController.delete);
 
 export default produtoRoutes;
 