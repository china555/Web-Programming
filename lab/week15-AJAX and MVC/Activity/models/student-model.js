const dbConnection = require('../resources/dbConnection');

/* Connection to MySQL DBMS */
class StudentMng {

    async getTopNStudent(N) {
        /* The method retrieve the N records from 
        the personal_info table */
        let connection = await dbConnection();
        try {
            // Write your SQL here
            const sql = `SELECT * FROM personal_info Limit ${N}`
            const data = await connection.query(sql)
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = StudentMng;