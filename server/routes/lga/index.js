import express from 'express';

import lgaController from '../../controllers/lga';

const { getAll } = lgaController;

const route = express.Router();

route.get('/', getAll);

export default route;
