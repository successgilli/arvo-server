import express from 'express';

import tokenMiddleware from '../../middlewares/token';
import lgaController from '../../controllers/lga';

const { getAll } = lgaController;
const { checkToken } = tokenMiddleware;

const route = express.Router();

route.get('/', checkToken, getAll);

export default route;
