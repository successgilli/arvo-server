import express from 'express';

import userController from '../../controllers/user';
import userMiddleware from '../../middlewares/user';
import partyValidatorRule from '../../validators/party';
import tokenMiddleware from '../../middlewares/token';
import { validateInputs, checkValidations} from '../../middlewares/validator';
import partySanitizers from '../../middlewares/sanitizers';


const { postMember, getAll } = userController;
const { extractPartyData, validateSearh } = userMiddleware;
const { validatePartyPost } = partyValidatorRule;
const { checkToken } = tokenMiddleware;
const { sanitizPartySearch } = partySanitizers;

const route = express.Router();

route.get(
    '/party/member',
    sanitizPartySearch(),
    checkToken,
    validateSearh,
    getAll);

route.post(
    '/party/member',
    validateInputs(validatePartyPost),
    checkValidations,
    extractPartyData,
    checkToken,
    postMember
);

export default route;
