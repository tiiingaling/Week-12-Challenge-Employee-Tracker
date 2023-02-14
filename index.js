const inquirer = require('inquirer');
const { findEmp } = require('./db/EmployeeDatabase');
require("console.table");
const db = require('./db/EmployeeDatabase');
// const questions = require('./questions')

// to do:
// view employees
// view roles
// view department
// add employee
// add role
// add department

const mainMenu = () => {
    // runs through the main choices
    inquirer
    .prompt([{
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                        'See all employees',
                        'See all roles',
                        'See all departments',
                        'Add an employee',
                        'Add a role',
                        'Add a new department',
                        'Update an employee',
                    ],
            }])
            .then((response) => {
                switch(response.choice) {
                    case 'See all employees':
                        view_employees()
                        break;
                    case 'See all roles':
                        view_roles()
                        break;
                    case 'See all departments':
                        view_departments()
                        break;
                    case 'Add an employee':
                        add_employee()
                }
            })
}

const view_employees = () => {
    db.findEmp().then(([results]) => {

        console.table(results);

        mainMenu();
    })
}

const view_roles = () => {
    
    db.findRole().then(([results]) => {

        console.table(results);

        mainMenu();
    })
}

const view_departments = () => {
    
    db.findDep().then(([results]) => {

        console.table(results);

        mainMenu();
    })
}

const add_employee = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the employee\'s first name?',
        name:'first_name'
    },
    {
        type: 'input',
        message: 'What is the employee\'s last name?',
        name:'last_name'
    },
    {
        type: 'input',
        message: 'What role is this employee?',
        name:'role'
    },
    {
        type: 'input',
        message: 'Who will be their manager?',
        name:'manager'
    },

])
.then((response) => {
    // need to query database for response.manager (name -> employee id) create a variable with the ID
    // variable will be passed to line 103 instead of 'response.manager_id'
    db.addEmp(response.first_name, response.last_name, response.role, 'response.manager_id')
})
}

const add_role = () => {
    db.addRole()
}

const add_department = () => {
    db.addDep()
}

mainMenu();


