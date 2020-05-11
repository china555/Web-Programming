const { Pool } = require('pg');
const pool = new Pool({
    // connectionString: process.env.DATABASE_URL,
    connectionString: "postgres://eijiroamagasa:@localhost:5432/webprop"
        // ssl: true
});

module.exports = async() => 
{
    try {
        return pool.connect()
    } catch (error) {
        throw error;
    }
}