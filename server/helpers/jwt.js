import jwt from 'jsonwebtoken';

const privateKey = 'secrete';

export default {
    getToken: (user) => {
        const token = jwt.sign(user, privateKey, { expiresIn: '2d' });

        return token;
    }
};
