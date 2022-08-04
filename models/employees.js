// create employee functions

const { connect } = require("../db/connection");

function addEmployee(){
    // add an employee, 

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


