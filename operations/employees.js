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
    // const [employees] = await db.query('SELECT * FROM employees');
    const [employees] = await db.query('SELECT * FROM employee_db.employees JOIN employee_db.roles ON employee_db.employees.role_id = employee_db.roles.id');
    return employees;
}

async function updateEmployeeRole(employeeID, roleID){
    // and update an employee role
    const db = await connect();
    const employee = await db.query('UPDATE employees SET role_id = ? WHERE id = ?', [roleID, employeeID]);
    return employee;
}

// export employee functions
module.exports = {
    addEmployee,
    getEmployees,
    updateEmployeeRole,
}


