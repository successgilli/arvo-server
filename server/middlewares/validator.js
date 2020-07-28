import { checkSchema, validationResult } from 'express-validator';


export const validateInputs = (validationRules) => {
    return checkSchema(validationRules);
}

export const checkValidations = (req, res, next) => {
    try{
        const errors = validationResult(req).array();

        if(errors.length){
            const err = errors.reduce((acc, item) => {
                const { param , msg } = item;

                if(param in acc) return { ...acc };
    
                return { ...acc, [param]: msg }
            }, {});
            
            return res.status(400).json({
                message: err,
                status: 400
            })
        };

        next();
    } catch(err){
        next(err);
    }
};

