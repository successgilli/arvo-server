import express from 'express';

import designationController from '../../controllers/designation';

const route = express.Router();
const { getAll } = designationController;

route.get('/', getAll);

export default route;
