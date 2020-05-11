//require resources
const bcrypt = require('bcrypt');
const dbConnection = require('../resources/dbConnection');

class Register {
    async registerAccount(fname, lname, role, mail, password) {
        let connection = await dbConnection();
        try {
            // const saltRounds = 10;
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hashed_password = bcrypt.hashSync(password, salt);
            const sql = {
                text: `INSERT INTO user_info(user_id, firstname, lastname, role, password, email) VALUES(nextval('serial'), $1, $2, $3, $4, $5)`, //insert query
                values: [fname, lname, role, password, mail],
            }

            let result = connection.query(sql);
            connection.release();
            return result;

        } catch (error) {
            throw error;
        }
    }

    async updateAccount(fname, lname, role, mail, password, id) {
        let connection = await dbConnection();
        try {
            // const saltRounds = 10;
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hashed_password = bcrypt.hashSync(password, salt);
            const sql = {
                text: `UPDATE user_info SET firstname = $1, lastname = $2, role = $3, password = $4, email = $5 WHERE user_id = $6`, //update query
                values: [fname, lname, role, password, mail, id],
            }

            let result = connection.query(sql);
            connection.release();
            return result;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = Register;