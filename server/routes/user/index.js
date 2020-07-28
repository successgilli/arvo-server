import express from 'express';

import userController from '../../controllers/user';
import userMiddleware from '../../middlewares/user';
import partyValidatorRule from '../../validators/party';
import tokenMiddleware from '../../middlewares/token';
import { validateInputs, checkValidations} from '../../middlewares/validator';


const { postMember, getAll } = userController;
const { extractPartyData } = userMiddleware;
const { validatePartyPost } = partyValidatorRule;
const { checkToken } = tokenMiddleware;

const route = express.Router();

route.get('/party/member', checkToken, getAll);

route.post(
    '/party/member',
    validateInputs(validatePartyPost),
    checkValidations,
    extractPartyData,
    checkToken,
    postMember
);

export default route;
