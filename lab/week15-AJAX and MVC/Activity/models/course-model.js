/* Model: Connect to the Course JSON */
const courseJSON = require('../resources/data/course.json');
module.exports.courseJSON = courseJSON;
/* -------------------------- */


/* Model: Connect to the Course DB */
const dbConnection = require('../resources/dbConnection');
class CourseMng{
    // Select
    async getAllCourses(){
        // Get the connection
        let connection = await dbConnection();
        try {
            let sql = "SELECT * FROM course";
            let results = await connection.query(sql);
            return results;
        } 
        catch (error) {
            console.log(error);
            throw error;
        } 
    }
}

module.exports.CourseMng = CourseMng;
/* -------------------------- */