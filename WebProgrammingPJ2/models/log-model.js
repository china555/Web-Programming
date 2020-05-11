const dbConnection = require('../resources/dbConnection'); // import from 
// class Log
class Log {
    async createLog(userID) {
            // connect to DB
            let connection = await dbConnection();
            try {
                var d = new Date();
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate();
                var hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
                var min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
                var sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();
                var time = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;

                const sql = {
                        text: `INSERT INTO login_info(login_id, user_id, create_at) VALUES(nextval('logidsequence'), $1, $2)`, //insert query
                        values: [userID, time],
                    }
                    // query sql
                let result = connection.query(sql);
                connection.release();
                return result;

            } catch (error) {
                throw error;
            }
        }
        // method
    async getLog(userID) {
        let connection = await dbConnection();
        try {
            const sql = {
                    text: `SELECT create_at FROM login_info WHERE user_id = $1 LIMIT 5`, //insert query
                    values: [userID],
                }
                // query sql to DB
            let result = connection.query(sql);
            connection.release();
            return result;

        } catch (error) {
            throw error;
        }
    }



}

module.exports = Log;