import bcrypt from 'bcrypt';

const saltRounds = 10;

export default {
    hash: async (password) => {
        const passHash = await bcrypt.hash(password, saltRounds);

        return passHash;
    },
    compare: async (pass, hashed) => {
        const result = await bcrypt.compare(pass, hashed);

        return result;
    }
};
