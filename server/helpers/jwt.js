import jwt from 'jsonwebtoken';

const privateKey = 'secrete';

export default {
    getToken: (user) => {
        const token = jwt.sign(user, privateKey, { expiresIn: '2d' });

        return token;
    },
    verifyToken: (token) => {
        try {
            const decoded = jwt.verify(token, privateKey);

            return decoded;
        } catch (error) {
            return false;
        }
    }
};
