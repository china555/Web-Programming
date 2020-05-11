const dbConnection = require('./resources/dbConnection');

class loginMng {
    async login(userId) {
        let connection = await dbConnection();
        try {
            const sql = {
                text: `SELECT * FROM user_info WHERE user_id = $1 LIMIT 1`,
                values: [userId],
            }
            let result = await connection.query(sql);
            connection.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
}



let checker = new loginMng();

var sessionCheck = async function(req, res, next) {
    if (req.session.user) {
        let result = await checker.login(req.session.user);
        if (result.rows != 0) {
            next();
        } else {
            res.redirect('/login');
        }

    } else {
        res.redirect('/login');
    }
}

module.exports = sessionCheck;