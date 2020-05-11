const dbConnection = require('../resources/dbConnection');
// class
class loginMng {
    async loginGeneral(email) {
        // waiting dor connect DB
        let connection = await dbConnection();
        try {
            const sql = {
                    text: `SELECT * FROM user_info WHERE email = $1 LIMIT 1`, //select query
                    values: [email],
                }
                //waiting query to execute on DB
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
    async loginAdmin(email) {
        let connection = await dbConnection();
        try {
            const sql = {
                    text: `SELECT * FROM user_info WHERE email = $1 AND role = $2 LIMIT 1`, //select query
                    values: [email, 'admin'],
                }
                //waiting query to execute on DB
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getUser(id) {
        let connection = await dbConnection();
        try {
            const sql = {
                    text: `SELECT * FROM user_info WHERE user_id = $1 LIMIT 1`, //select query
                    values: [id],
                }
                //waiting query to execute on DB
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async Users() {
        let connection = await dbConnection();
        try {
            const sql = {
                    text: `SELECT * FROM user_info ORDER BY user_id`, //select query
                }
                //waiting query to execute on DB
            let result = await connection.query(sql);
            connection.release();
            return result
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        let connection = await dbConnection();
        try {
            const deletelog = {
                    text: `DELETE FROM login_info WHERE user_id = $1`, //delete query
                    values: [id],
                }
                //waiting query to execute on DB
            await connection.query(deletelog);

            const sql = {
                text: `DELETE FROM user_info WHERE user_id = $1`, //delete query
                values: [id],
            }
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
}
//export
module.exports = loginMng