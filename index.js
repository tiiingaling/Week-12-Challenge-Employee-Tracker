const inquirer = require('inquirer');
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
                }
            })
}

const view_employees = () => {

    db.findAllEmps().then(([results]) => {

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

mainMenu();


