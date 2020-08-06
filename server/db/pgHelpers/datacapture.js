import pgConnect from '../pg';

export default {
    search: async (
        limit, offset,
        query,
        filterObj,
        fields
    ) => {
        let queryString = 'from datacaptureExtended where';
        const filterArray = (filterObj) ? Object.keys(filterObj) : [];
        const xand = fields.filter(item => !filterArray.includes(item));

        filterArray.forEach((item, index) => {
            queryString +=
                ` ${item} ilike '%${filterObj[item]}%' ${((filterArray.length - 1) === index) ? '' : 'and'}`;

        });


        xand.forEach((item, index) => {
            queryString +=
                ` ${(
                    (!index) && filterArray.length
                ) ? `and (${item} ilike '%${query}%' ${((xand.length - 1) === index) ? ')' : 'or'}` : (
                        (!index) ? (
                            `(${item} ilike '%${query}%' ${((xand.length - 1) === index) ? ')' : 'or'}`
                        ) :
                            (`${item} ilike '%${query}%' ${((xand.length - 1) === index) ? ')'
                                : 'or'}`)
                    )
                }`;
        });

        const response = await pgConnect.query(`
        select * ${queryString} limit $1 offset $2`,
            [limit, offset]
        );

        const count = await pgConnect.query(`
        select count(distinct id) ${queryString}
        `);

        const { rows } = response;
        const { rows: rowCount } = count;

        return {
            values: rows || [],
            totalCount: (rowCount[0]) ? rowCount[0].count : 0
        };
    }
};
