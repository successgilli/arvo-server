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
    }
};
