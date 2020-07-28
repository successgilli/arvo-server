import express from 'express';

import userController from '../../controllers/user';
import userMiddleware from '../../middlewares/user';
import partyValidatorRule from '../../validators/party';
import { validateInputs, checkValidations} from '../../middlewares/validator';


const { postMember, getAll } = userController;
const { extractPartyData } = userMiddleware;
const { validatePartyPost } = partyValidatorRule;

const route = express.Router();

route.get('/party/member', getAll);

route.post(
    '/party/member',
    validateInputs(validatePartyPost),
    checkValidations,
    extractPartyData,
    postMember
);

export default route;
