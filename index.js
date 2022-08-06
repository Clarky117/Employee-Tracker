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
        // {
        //     message: 'What is the ID of the new role?',
        //     type: 'input',
        //     name: 'role_id',
        //     when: (answer) => answer.operation === 'Add a role'
        // },
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
                const employee = await addEmployee(answer.first_name, answer.last_name, answer.role_id, answer.manager_id);
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