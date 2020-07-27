import db from '../db/models';

const {
    Pu
} = db;

export default {
    getAll: async (req, res, next) => {
        try{
           const puResponse = await Pu.findAll();
           
           return res.status(200).json({
               data: puResponse,
               status: 200
           });
        } catch(err){
            next(err);
        }
    }
}
