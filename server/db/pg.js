import { config } from 'dotenv';
import pg from 'pg';

config();

const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

export default {
  query: (text, params) => {
      try{
        return pool.query(text, params)
      } catch(err){
          console.log(err)
      }
  },
}
