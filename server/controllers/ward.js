import db from '../db/models';

const {
    Ward
} = db;

export default {
    getAll: async (req, res, next) => {
        try{
           const wardResponse = await Ward.findAll();
           
           return res.status(200).json({
               data: wardResponse,
               status: 200
           });
        } catch(err){
            next(err);
        }
    }
}
