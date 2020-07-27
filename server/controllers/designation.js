import db from '../db/models';

const {
    Designation
} = db;

export default {
    getAll: async (req, res, next) => {
        try{
           const designationRes = await Designation.findAll();
           
           return res.status(200).json({
               data: designationRes,
               status: 200
           });
        } catch(err){
            next(err);
        }
    }
}
