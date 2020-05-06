//async fumction we don't need it to be call back hell 
async function EmployeeWebService(url, method, sentData = {}) {
    let data;
    if (method == "select") {
        let response = await fetch(url, {
            method: 'GET'
        });
        data = await response.json();
    } else if (method == "insert" || method == "update" || method == "delete") {
        let aMethod;
        if (method == "insert") {
            aMethod = "POST";
        } else if (method == "update") {
            aMethod = "PUT";
        } else if (method == "delete") {
            aMethod = "DELETE";
        }
        let response = await fetch(url, {
            method: aMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sentData)
        });
        data = await response.json();
    }

    return data;
}
// to render table 
function render(data) {
    let output =
        `<h1>Employee List</h1>
            <table style="width:100%">
                <tr style="font-size: 30px;">
                    <td class="big">ID</td>
                    <td class="big">Name</td>
                    <td class="big">Role</td>
                    <td class="big">Phone Number</td>
                </tr>`
    data.forEach(value => { // use for array 
        output += `<tr>
                    <td>${value.ID}</td>
                    <td>${value.Firstname} ${value.Lastname}</td>
                    <td>${value.Role}</td>
                    <td>${value.Phonenum}</td></tr>`
    })

    output += `</table>`;
    return output;
}

$(document).ready(function () { // begin og Jquery
    let employeeID, employeeFirstName, employeeLastName, employeePhoneNumber;

    //clear output when finish 1 statement 
    function clearInput() {
        $("#employeeID").val('');
        $("#employeeFirstName").val('');
        $("#employeeLastName").val('');
        $("#employeePhoneNumber").val('');
    }
    //when click insert buttom
    $("#insert").click(function () {
        //to get value from html page
        employeeID = $("#employeeID").val();
        employeeFirstName = $("#employeeFirstName").val();
        employeeLastName = $("#employeeLastName").val();
        employeePhoneNumber = $("#employeePhoneNumber").val();
        //create object 
        let employeeData = {
            employee: {
                employeeID: employeeID,
                employeeFirstName: employeeFirstName,
                employeeLastName: employeeLastName,
                employeePhoneNumber: employeePhoneNumber
            }
        };
        //call web service
        EmployeeWebService("http://localhost:8080/employee", "insert", employeeData)
            .then((data) => {
                console.log(data);
                if (data.msg.length > 0) {
                    //make aleart massage
                    alert(data.msg);
                }
                clearInput();
            });
    })
     //when click delete buttom
    $("#delete").click(function () {
        //to get value from html page
        employeeID = $("#employeeID").val();
        //create object
        let employeeData = {
            employeeID: employeeID
        };
         //call web service
        EmployeeWebService("http://localhost:8080/employee", "delete", employeeData)
            .then((data) => {
                console.log(data);
                if (data.msg.length > 0) {
                    alert(data.msg);
                    clearInput();
                }
            })
    });
     //when click select_all buttom
    $("#select_all").click(function () {
         //call web service
        EmployeeWebService("http://localhost:8080/employees", "select")
            .then((data) => {
                console.log(data);
                if (data.data.length > 0) {
                    alert(data.msg);
                    let output = render(data.data)
                    console.log(output)
                    $("#output").html(output);
                    clearInput();
                }
            });
    });
     //when click update buttom
    $("#update").click(() => {
        employeeID = $("#employeeID").val();
        employeeFirstName = $("#employeeFirstName").val();
        employeeLastName = $("#employeeLastName").val();
        employeePhoneNumber = $("#employeePhoneNumber").val();
        employeeRole = $('#employeeRole').val();
        let employeeData = {
            employeeID: employeeID,
            employeeFirstName: employeeFirstName,
            employeeLastName: employeeLastName,
            employeePhoneNumber: employeePhoneNumber,
            employeeRole: employeeRole
        };
         //call web service
        EmployeeWebService("http://localhost:8080/employee", "update", employeeData)
            .then((data) => {
                console.log(data);
                if (data.msg.length > 0) {
                    alert(data.msg);
                    clearInput();
                }
            })
    })
     //when click select buttom
    $("#select").click(() => {
        employeeID = $("#employeeID").val();
         //call web service
        EmployeeWebService("http://localhost:8080/employee/" + employeeID, "select")
            .then((data) => {
                console.log(data)
                if (data) {
                    console.log(data.msg);
                    alert(data.msg);
                    let output = render(data.data)
                    $("#output").html(output);
                    clearInput();
                }
            });
    });
})