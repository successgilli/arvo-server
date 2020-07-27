import express from 'express';

import puControllers from '../../controllers/pu';


const route = express.Router();
const { getAll } = puControllers;

route.get('/', getAll);

export default route;
