const express = require('express');
const mysql = require('mysql2/promise')
const dotenv = require('dotenv');
const router = express.Router();
const app = express();
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
//connect to database
dotenv.config()

app.use(express.urlencoded({
    extended: true
}));

app.use('/', router);
//Non Persistant 
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

function render(data) {
    const output = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>Student List</title>
        <style>
            table,
            th,
            td {
                border: 2px solid black;
                border-collapse: collapse;
            }
    
            tr>td {
                padding: 12px;
                font-size: 20px;
            }
    
            .big {
                font-size: 30px;
            }
        </style>
    </head>
    
    <body>
        <h1>Student List</h1>
        <ul>";
            <table style="width:100%">
                <tr style="font-size: 30px;">
                    <td class="big">Name</td>
                    <td class="big">DoB</td>
                    <td class="big">Mobile</td>
                </tr>`
    data.forEach(value => {
        const Date = value.DOB
        output += `<tr><td>${value.Firstname} ${value.Lastname}</td>
                    <td>${Date.getDate()}-${months[Date.getMonth()]}-${Date.getFullYear()}</td>
                    <td>${value.Phone}</td></tr>`
    })

    output += `</table><form action="/submit-form" method="POST">
            <label for="ID">ID:</label><br>
            <input type="text" id="id" name="id"><br>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="Firstname" maxlength="50"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lastName" maxlength="50"><br>
            <label for="DOB">Date of Birth:</label><br>
            <input type="date" id="DOB" name="DOB"><br>
            <label for="phone">Phone:</label><br>
            <input type="text" id="phone" name="phone" maxlength="10"><br><br>
            <input type="submit" value="Submit"></form>
            </body></html>`
    return output;
}

// const sql = "INSERT INTO personal_info VALUES (5, 'A','B','1989-02-19', '0123456789')";
// router.post('/', async (req, res) => {
//     const data = await connection.query(sql)
//     res.send("add");
// })

router.post('/submit-form', async (req, res) => {
    const id = req.body.id
    const firstName = req.body.Firstname
    const lastName = req.body.lastName
    const dateOfBirth = req.body.DOB
    const phoneNumber = req.body.phone
    //const sql = `INSERT INTO personal_info(StudentID,Firstname,Lastname,DOB,Phone) VALUES (id,firstName,lastName,dateOfBirth,phoneNumber)`
    const sql = `INSERT INTO personal_info(StudentID,Firstname,Lastname,DOB,Phone) VALUES (?,?,?,?,?)` // เป็น pattern
    await connection.execute(sql, [id, firstName, lastName, dateOfBirth, phoneNumber]) // เป็นการเอาค่าไปใส่ใน pattern
    res.send("Insert already");
})

const select = "Select * From personal_info"
router.get('/', async (req, res) => {
    //destruction array
    const [data] = await connection.query(select)
    res.send(render(data))
})

router.get('/:id', async (req, res) => {
    console.log('คอลละนะจ้ะ')
    const personId = req.params.id
    const sql = `Select * FROM personal_info WHERE StudentID = ?`

    // const [data] = await connection.query(sql)
    const [data] = await connection.execute(sql, [personId])
    res.send(data)
})

app.listen(process.env.PORT, () => {
    console.log(`Hello ${process.env.PORT}`);
})