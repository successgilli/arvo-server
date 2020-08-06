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
            const filterfields = [
                "gender", "lganame", "wardname", "puname", "religion",
                "memberships", "designations", "occupation"
            ];

            const filterObject = filterfields.reduce((acc, item) => {
                if(item in req.query && (req.query[item] !== ''))
                return { ...acc, [item]: req.query[item] };

                return { ...acc };
            }, {});

            

            req.userQuery = {
                page: parseInt(page || 1),
                limit: parseInt(limit || 10),
                query: search.trim() || '',
                filterObject: (Object.keys(filterObject).length) ? filterObject : null
            };

            next()
        } catch(err){
            next(err);
        }
    }
};
