import pgConnect from '../pg';

export default {
    search: async (limit, offset, query) => {
        const response = await pgConnect.query(`
        select * from datacaptureExtended where memberships
        ilike '%${query}%' or designations ilike '%${query}%'
        or firstname ilike '%${query}%'
        or lastname ilike '%${query}%'
        or phone ilike '%${query}%'
        or email ilike '%${query}%'
        or leader ilike '%${query}%'
        or gender ilike '%${query}%'
        or lganame ilike '%${query}%'
        or wardname ilike '%${query}%'
        or puname ilike '%${query}%'
        or religion ilike '%${query}%'
        or occupation ilike '%${query}%'
        limit $1 offset $2
        `, [limit, offset]);

        const count = await pgConnect.query(`
        select count(distinct id) from datacaptureExtended where memberships
        ilike '%${query}%' or designations ilike '%${query}%'
        or firstname ilike '%${query}%'
        or lastname ilike '%${query}%'
        or phone ilike '%${query}%'
        or email ilike '%${query}%'
        or leader ilike '%${query}%'
        or gender ilike '%${query}%'
        or lganame ilike '%${query}%'
        or wardname ilike '%${query}%'
        or puname ilike '%${query}%'
        or religion ilike '%${query}%'
        or occupation ilike '%${query}%'
        `);

        const { rows } = response;
        const { rows: rowCount } = count;

        return {
            values: rows || [],
            totalCount: (rowCount[0]) ? rowCount[0].count : 0
        };
    }
};
