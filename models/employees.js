// create employee functions

const { connect } = require("../db/connection");

async function addEmployee(firstName, lastName, roleID, managerID){
    // add an employee, 
// INSERT INTO `employee_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('Third', 'Take', '3', '1');
const db = await connect();
const employeeArray = [firstName, lastName, roleID, managerID];
await db.query('INSERT INTO `employee_db`.`employees` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES (?, ?, ?, ?)', employeeArray);
}

async function getEmployees(){
    // view all employees, 
    const db = await connect();
    const [employees] = await db.query('SELECT * FROM employees');
    return employees;
}

function updateEmployeeRole(){
    // and update an employee role

}

// export employee functions
module.exports = {
    addEmployee,
    getEmployees,
    updateEmployeeRole,
}


