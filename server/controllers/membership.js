import db from '../db/models';

const {
    MembershipStatus
} = db;

export default {
    getAll: async (req, res, next) => {
        try{
           const membershipStatusRes = await MembershipStatus.findAll();
           
           return res.status(200).json({
               data: membershipStatusRes,
               status: 200
           });
        } catch(err){
            next(err);
        }
    }
}
