import express from 'express';

import puControllers from '../../controllers/pu';
import tokenMiddleware from '../../middlewares/token';

const route = express.Router();

const { getAll } = puControllers;
const { checkToken } = tokenMiddleware;

route.get('/', checkToken, getAll);

export default route;
