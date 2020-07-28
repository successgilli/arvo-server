import jwt from '../helpers/jwt';
import db from '../db/models';

const {
    User
} = db;

const { verifyToken } = jwt;

export default {
    checkToken: async function (req, res, next) {
        try {
            const error = new Error('unauthorized');
            error.status = 401;

            const { authorization } = req.headers;

            if (!authorization) throw error;

            const userToken = authorization;
            const decoded = verifyToken(userToken);

            if (!decoded || !decoded.id) throw error;

            const { id: userId } = decoded;
            const userRes = await User.findOne({
                where: { id: userId }
            })
            
            if(!userRes) throw error;

            const { dataValues: user } = userRes;
            req.user = user;

            next();
        } catch (err) {
            next(err);
        }
    }
};
