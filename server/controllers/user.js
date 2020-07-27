import db from '../db/models';

const {
    DataCapture, DataCaptureMembership,
    DatatCaptureDesignation
} = db;

const arrangeMemberData = (memberQueryArray) => (
    memberQueryArray.map(({
    Lga, Ward, Pu, DataCaptureMemberships,
    DatatCaptureDesignations,
    ...memberData
}) => ({
    ...memberData.dataValues,
    lga: Lga.name,
    ward: Ward.name,
    pu: Pu.name,
    memberships: DataCaptureMemberships.map(({ MembershipStatus }) => MembershipStatus),
    designations: DatatCaptureDesignations.map(({ Designation }) => Designation)
})).reduce((acc, item) => {
    const {
        Lga, Ward, Pu,
        DataCaptureMemberships,
        DatatCaptureDesignations,
        ...selected
    } = item;

    return [ ...acc, selected ]
}, []));


export default {
    postMember: async (req, res, next) => {
        const transaction = await db.sequelize.transaction();
        try {
            const { partyData } = req.body;
            const { membershipStatus, designation, ...dataCaptureForm } = partyData;

            const dataResponse = await DataCapture.create(dataCaptureForm, { transaction });
            const dataFields = dataResponse.get();

            const membershipSelection = membershipStatus.map(item => ({
                DataCaptureId: dataFields.id,
                MembershipStatusId: item
            }));
            
            await DataCaptureMembership.bulkCreate(
                membershipSelection, { transaction }
            );

            if (designation && designation.length) {
                const designationSelection = designation.map(item => ({
                    DataCaptureId: dataFields.id,
                    DesignationId: item
                }));

                await DatatCaptureDesignation.bulkCreate(
                    designationSelection, { transaction }
                );
            }
            
            await transaction.commit();

            const inputPartyMember = await DataCapture.findOne({
                where: { id: dataFields.id },
                include: {
                    all: true,
                    nested: true
                }
            });

            const selectedData = arrangeMemberData([inputPartyMember])[0];
    
            return res.status(200).json({
                data: selectedData,
                status: 200
            })
        } catch (err) {
            await transaction.rollback();
            err.status = 400;
            next(err);
        }
    },
    getAll: async (req, res, next) => {
        try{
            const members = await DataCapture.findAll({
                include: {
                    all: true,
                    nested: true
                },
                order: [['id', 'DESC']]
            });
            
            const selectedData = arrangeMemberData(members);

            return res.status(200).json({
                data: selectedData,
                status: 200
            });
        }catch(err){
            next(err);
        }
    }
};
