import express from 'express';

import wardControllers from '../../controllers/ward';
import tokenMiddleware from '../../middlewares/token';

const route = express.Router();

const { getAll } = wardControllers;
const { checkToken } = tokenMiddleware;

route.get('/', checkToken, getAll);

export default route;
