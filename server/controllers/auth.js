import bcrypt from '../helpers/bcrypt';
import jwt from '../helpers/jwt';

const { compare } = bcrypt;
const { getToken } = jwt;

export default {
    login: async(req, res, next) => {
        try{
            const { password: userPassword } = req.body;
            const { user } = req;
            const { password: hashedPass } = user;
            const passCheck = await compare(userPassword, hashedPass);

            if (!passCheck) {
                const err = new Error('email or password is incorrect');
                err.status = 400;

                throw err;
            }

            const { password, ...userObj } = user;
            const token = getToken({ id: user.id });

            return res.status(200).json({
                data: {
                    profile: userObj,
                    jwt: token
                },
                status: 200
            })
        } catch(error){
            next(error);
        }
    }
};
