import { Router } from 'express';
import user from './user';
import auth from './auth';
import lga from './lga';
import ward from './ward';
import pu from './pu';
import designation from './designtion';
import membership from './membership';

const route = Router();

route.use('/user', user);
route.use('/auth', auth);
route.use('/lga', lga);
route.use('/ward', ward);
route.use('/pu', pu);
route.use('/designation', designation);
route.use('/membership', membership);

export default route;
