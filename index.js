//import inquirer
const inquirer = require('inquirer');
// import modules
const { getDepartments, addDepartment } = require('./operations/department');
const { getEmployees, addEmployee, updateEmployeeRole } = require('./operations/employees');
const { getRoles, addRole } = require('./operations/roles');

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
        // add employee
        {
            message: 'What is the new employees first name?',
            type: 'input',
            name: 'first_name',
            when: (answer) => answer.operation === 'Add an employee'
        },
        {
            message: 'What is the new employees last name?',
            type: 'input',
            name: 'last_name',
            when: (answer) => answer.operation === 'Add an employee'
        },
        {
            message: 'What is the new employees role id?',
            type: 'input',
            name: 'role_id',
            when: (answer) => answer.operation === 'Add an employee'
        },
        {
            message: 'What is the new employees managers id?',
            type: 'input',
            name: 'manager_id',
            when: (answer) => answer.operation === 'Add an employee'
        },
        // update employee role
        {
            message: 'ID of the employee whos role is to be updated?',
            type: 'input',
            name: 'new_role',
            when: (answer) => answer.operation === 'Update employee role'
        },
        {
            message: 'What is new role ID?',
            type: 'input',
            name: 'updated_role',
            when: (answer) => answer.operation === 'Update employee role'
        }
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
            // answer.role_id, 
            case 'Add a role':
                const role = await addRole(answer.role_title, answer.role_salary, answer.role_department_id);
                break;
    
            // view all employees, 
            case 'View all employees':
                const employees = await getEmployees();
                console.table(employees);
                break;
                
            // add an employee, 
            case 'Add an employee':
                let manager = answer.manager_id || null;
                const employee = await addEmployee(answer.first_name, answer.last_name, answer.role_id, manager);
                break;
    
            // and update an employee role
            case 'Update employee role':
                await updateEmployeeRole(answer.new_role, answer.updated_role);
                break;    
    
        // exit if required
            case 'Exit':
                process.exit(0);
                break;
        }
        await init();
    })
}

// call function to initialise app
init();