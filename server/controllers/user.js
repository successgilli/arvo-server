import db from '../db/models';
import pgHelpers from '../db/pgHelpers/datacapture';

const {
    search, getAll
} = pgHelpers;

const {
    DataCapture, DataCaptureMembership,
    DatatCaptureDesignation
} = db;

const arrangePgData = (rows) => {
    const resObj = rows.map((item) => (
        {
            id: item.id,
            firstname: item.firstname,
            lastname: item.lastname,
            phone: item.phone,
            email: item.email,
            leader: item.leader,
            gender: item.gender,
            lgaId: item.lgaid,
            wardId: item.wardid,
            puId: item.puid,
            occupation: item.occupation,
            religion: item.religion,
            lga: item.lganame,
            ward: item.wardname,
            pu: item.puname,
            memberships: (
                item['memberships'] ? item['memberships'].split(', ').map(item => ({
                    id: item.charAt(0),
                    name: item.slice(1)
                })) : []
            ),
            designations: (
                item['designations'] ? item['designations'].split(', ').map(item => ({
                    id: item.charAt(0),
                    name: item.slice(1)
                })) : [])
        }
    ));

    return Object.keys(resObj).map(key => resObj[key]);
}

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

        return [...acc, selected]
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
        try {
            // remember to validate query params
            const { page, limit, query, filterObject } = req.userQuery;
            const offset = limit * (page - 1);
            const allFields = [
                "gender", "lganame", "wardname", "puname", "religion",
                "phone", "email", "occupation", "firstname", "lastname",
                "leader", "memberships", "designations"
            ];

            let options = {
                include: {
                    all: true,
                    nested: true,
                },
                order: [['id', 'DESC']],
                limit,
                offset,
                distinct: true,
            };

            let total
            let rows;

            if ((query.trim() !== '') || filterObject) {
                const pgRes = await search(limit, offset, query, filterObject, allFields);
                const { values, totalCount } = pgRes;

                rows = arrangePgData(values);
                total = totalCount;

            } else {
                const pgRes = await getAll('datacaptureExtended', limit, offset);
                const { values, totalCount } = pgRes;

                rows = arrangePgData(values);
                total = totalCount;
            }

            return res.status(200).json({
                data: {
                    rows,
                    total,
                    page,
                    limit,
                    offset
                },
                status: 200
            });
        } catch (err) {
            next(err);
        }
    }
};
