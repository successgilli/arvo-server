import express from 'express';

import designationController from '../../controllers/designation';
import tokenMiddleware from '../../middlewares/token';

const route = express.Router();

const { getAll } = designationController;
const { checkToken } = tokenMiddleware;

route.get('/', checkToken, getAll);

export default route;
