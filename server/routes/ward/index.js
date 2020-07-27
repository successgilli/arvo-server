import express from 'express';

import wardControllers from '../../controllers/ward';

const route = express.Router();
const { getAll } = wardControllers;

route.get('/', getAll);

export default route;
