// create roles functions
const { connect } = require("../db/connection")

async function addRole(roleID, title, salary, departmentID){
    // add a role,
    const db = await connect();
    const roleArray = [roleID, title, salary, departmentID];
    await db.query('INSERT INTO `employee_db`.`roles` (`id`, `title`, `salary`, `department_id`) VALUES (?, ?, ?, ?)', roleArray);
}

async function getRoles(){
    // view all roles, 
    const db = await connect();
    const [roles] = await db.query('SELECT * FROM roles');
    return roles;
}

// export roles functions
module.exports = {
    addRole,
    getRoles,
}