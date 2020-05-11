const dbConnection = require('../resources/dbConnection');

class Check {
    async emailChecker(email) {
        let connection = await dbConnection();
        try {
            const sql = {
                text: `SELECT email FROM user_info WHERE email = $1 LIMIT 1`, //select query
                values: [email],
            }
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = Check;