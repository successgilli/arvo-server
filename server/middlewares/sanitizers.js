import { query } from 'express-validator';

export default {
    sanitizPartySearch: () => {
        const expectedFields = [
            "gender", "lganame", "wardname", "puname", "religion",
            "memberships", "designations", "limit", "page", "search",
            "occupation"
        ];

        const sanitizers = expectedFields.map(item => {
            return query(item).blacklist('*@!%;$#()*&\\/^%"')
        });

        return sanitizers;
    }
};
