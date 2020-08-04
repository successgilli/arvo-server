import db from '../db/models';

const {
    Lga, Ward, Pu,
    MembershipStatus,
    Designation
} = db;

export default {
    get: async (req, res, next) => {
        try {
            const lgas = await Lga.findAll();
            const wards = await Ward.findAll();
            const pus = await Pu.findAll();
            const memberships = await MembershipStatus.findAll();
            const designations = await Designation.findAll();

            return res.status(200).json({
                data: {
                    lgas,
                    wards,
                    pus,
                    memberships,
                    designations
                },
                status: 200
            });
        } catch (err) {
            next(err);
        }
    }
};
