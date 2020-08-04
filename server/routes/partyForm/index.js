import express from 'express';

import partyFormController from '../../controllers/partyForm';

const route = express.Router();
const { get } = partyFormController;

route.get('/form', get);

export default route;
