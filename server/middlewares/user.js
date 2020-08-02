import regexPatterns from '../helpers/regex';

const { blacklist } = regexPatterns;

export default {
    extractPartyData: async (req, res, next) => {
        try{
            const expectedFields = [
                'firstname', 'lastname', 'wardId', 'lgaId',
                'membershipStatus', 'puId', 'phone', 'email',
                'religion', 'occupation', 'designation', 'gender', 'leader'
            ]
            
            const partyForm = {};

            expectedFields.forEach(item => {
                if(item in req.body) partyForm[item] = req.body[item];
            });

            req.body.partyData = { ...partyForm };

            next();
        } catch (err){
            next(err);
        }
    },
    validateSearh: async (req, res, next) => {
        try{
            const { page, limit, search } = req.query;
            const validatedSearch = search.replace(blacklist, '');

            req.userQuery = {
                page: parseInt(page || 1),
                limit: parseInt(limit || 10),
                query: validatedSearch.trim() || ''
            };

            next()
        } catch(err){
            next(err);
        }
    }
};
