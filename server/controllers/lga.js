import db from '../db/models';

const {
    Lga
} = db;

export default {
    getAll: async (req, res, next) => {
        try{
           const lgasResponse = await Lga.findAll();
           
           return res.status(200).json({
               data: lgasResponse,
               status: 200
           });
        } catch(err){
            next(err);
        }
    }
}
