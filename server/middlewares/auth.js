import db from '../db/models';

const {
    User
} = db

export default {
    checkUserInDb: async (req, res, next) => {
        try{
            const { email } = req.body;

            const user = await User.findOne({
                where: { email }
            });

            if (!user){
                const err = new Error('user does not exist');
                err.status = 404;

                throw err;
            }

            const { dataValues: data } = user;
            req.user = data;

            return next();
        } catch(err){
            if(!err.status) err.status = 400;
            return next(err);
        }
    }
};
