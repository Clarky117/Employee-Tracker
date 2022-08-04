// create functions to export

// import connection
const { connect } = require("../db/connection")

async function addDepartment(name){
    // add a department, 
    const db = await connect();
    await db.query('INSERT INTO `employee_db`.`departments` (`name`) VALUES (?)', name);    
}

async function getDepartments(){
    // view all departments,
    const db = await connect();
    const [departments] = await db.query('SELECT * FROM departments');
    return departments;

}

// export functions
module.exports = {
    addDepartment,
    getDepartments,
}
