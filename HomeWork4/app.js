//import
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParse = require('body-parser');
// const cors = require('cors')
const path = require('path');
//connect to database
dotenv.config()

app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParse.json())
app.use(express.static(__dirname + '/Public'))

//Non Persistant require from /resources/dbConnection
const connection = require('./resources/dbConnection');

//to send the file back to the root
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
//send from webservice in Jquery
app.post('/employee', async (req, res) => {
    // create varieble to recieve data from jquery
    const role = ['Manager', 'Account', 'Office', 'PR', 'HR']
    const employeeID = req.body.employee.employeeID;
    const employeeFirstName = req.body.employee.employeeFirstName;
    const employeeLastName = req.body.employee.employeeLastName;
    const employeePhoneNumber = req.body.employee.employeePhoneNumber;
    const employeeRole = role[Math.floor((Math.random() * role.length))];
    //create sql to assiagn value
    const sql = "INSERT INTO employee (ID,Firstname,Lastname,Role,Phonenum) VALUES (?,?,?,?,?)" // it a pattern
    await connection.execute(sql, [employeeID, employeeFirstName, employeeLastName, employeeRole, employeePhoneNumber]); // it will assign following ?
    res.send({ //to response something back to cilent
        msg: "INSERT Already"
    });
})
//send from webservice in Jquery
app.delete('/employee', async (req, res) => {
    const employeeID = req.body.employeeID;
    //if it not  have
    if (employeeID == NaN && employeeID === undefined) {
        return res.status(400).send({
            msg: 'Please provide employeeID'
        });
    }
    //make sql to query
    const sql = 'DELETE FROM employee WHERE ID = ?'
    //it await because it a promise type then we need to wait until they finished
    const data = await connection.execute(sql, [employeeID])
    return res.send({ //to response something back to cilent
        msg: 'Employee has been deleted successfully.'
    });
})

//send from webservice in Jquery
app.get('/employees', async (req, res) => {
    const sql = "SELECT * FROM employee"
    const [data] = await connection.execute(sql);
    res.send({ //to response something back to cilent
        data: data,
        msg: "All List of Employee"
    })
})

//send from webservice in Jquery
app.put('/employee', async (req, res) => {
    console.log(req.body)
    const employeeID = req.body.employeeID;
    const employeeFirstName = req.body.employeeFirstName;
    const employeeLastName = req.body.employeeLastName;
    const employeePhoneNumber = req.body.employeePhoneNumber;
    const employeeRole = req.body.employeeRole;
    const sql = 'UPDATE employee SET Firstname = ?,Lastname = ?,Role = ?,Phonenum = ? WHERE ID = ?'
    await connection.execute(sql, [employeeFirstName, employeeLastName, employeeRole, employeePhoneNumber, employeeID]);
    res.send({ //to response something back to cilent
        msg: "Updated successful"
    })
})

//send from webservice in Jquery
app.get('/employee/:id', async (req, res) => {
    const sql = "SELECT * FROM employee WHERE ID = ?"
    const [data] = await connection.execute(sql, [req.params.id]);
    res.send({ //to response something back to cilent
        data: data,
        msg: `The employee ID: ${req.params.id}`
    })
})
// the port of this one
app.listen(process.env.PORT, () => {
    console.log("listen at Port:" + process.env.PORT)
})