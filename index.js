//import inquirer
const inquirer = require('inquirer');
// import modules
const { getDepartments, addDepartment } = require('./models/department');
const { getEmployees, addEmployee, updateEmployeeRole } = require('./models/employees');
const { getRoles, addRole } = require('./models/roles');

// ask the user what they want to do?
function init(){
    return inquirer.prompt([
        {
            message: 'What would you like to do?',
            type: 'list',
            name: 'operation',
            choices: [
                'View all departments',
                'Add a department',
                'View all roles',
                'Add a role',
                'View all employees',
                'Add an employee',
                'Update employee role',
                'Exit',
            ]
        },
        // new department
        {
            message: 'What is the new department name?',
            type: 'input',
            name: 'department_name',
            when: (answer) => answer.operation === 'Add a department',
        },
        // new role
        {
            message: 'What is the ID of the new role?',
            type: 'input',
            name: 'role_id',
            when: (answer) => answer.operation === 'Add a role'
        },
        {
            message: 'What is the title of the new role?',
            type: 'input',
            name: 'role_title',
            when: (answer) => answer.operation === 'Add a role'
        },
        {
            message: 'What is the salary of the new role?',
            type: 'input',
            name: 'role_salary',
            when: (answer) => answer.operation === 'Add a role'
        },
        {
            message: 'What is the department ID of the new role?',
            type: 'input',
            name: 'role_department_id',
            when: (answer) => answer.operation === 'Add a role'
        },
    ]).then(async (answer) =>{
        // run current function depending on response
        
        switch(answer.operation){
            // view all departments,
            case 'View all departments':
                const departments = await getDepartments();
                console.table(departments);
                break;
                
             // add a department, 
            case 'Add a department':
                const department = await addDepartment(answer.department_name);
                break;
    
            // view all roles, 
            case 'View all roles':
                const roles = await getRoles();
                console.table(roles);
                break;
    
            // add a role,
            case 'Add a role':
                const role = await addRole(answer.role_id, answer.role_title, answer.role_salary, answer.role_department_id);
                break;
    
            // view all employees, 
            case 'View all employees':
                const employees = await getEmployees();
                console.table(employees);
                break;
                
            // add an employee, 
            case 'Add an employee':
                const employee = await addEmployee();
                break;
    
            // and update an employee role
            case 'Update employee role':
                await updateEmployeeRole();
                break;    
    
        // exit if required
            case 'Exit':
                process.exit(0);
                break;
        }

        await init();
    })

}

init();