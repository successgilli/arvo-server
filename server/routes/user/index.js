import express from 'express';
import userController from '../../controllers/user';
import userMiddleware from '../../middlewares/user';

const { postMember, getAll } = userController;
const { extractPartyData } = userMiddleware;

const route = express.Router();

route.get('/party/member', getAll);

route.post('/party/member', extractPartyData, postMember);

export default route;
