import express from 'express';

import membershipController from '../../controllers/membership';

const route = express.Router();
const { getAll } = membershipController;

route.get('/', getAll);

export default route;
