import express from 'express';

import authMiddlewares from '../../middlewares/auth';
import authController from '../../controllers/auth';

const { checkUserInDb } = authMiddlewares;
const { login } = authController;

const route = express.Router();

route.post('/login', checkUserInDb, login);


export default route;
