import express from 'express';

import membershipController from '../../controllers/membership';
import tokenMiddleware from '../../middlewares/token';

const route = express.Router();

const { getAll } = membershipController;
const { checkToken } = tokenMiddleware;

route.get('/', checkToken, getAll);

export default route;
