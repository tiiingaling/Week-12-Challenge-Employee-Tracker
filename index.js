const inquirer = require('inquirer');
// const EmployeeDatabase = require('./db/EmployeeDatabase');
const db = require('./config/connection');
// const questions = require('./questions')

// connects to the database
db.connect();

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
            .then((reponse) => {
                switch(Response.choice) {
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

    db.getEmployees().then((results) => {

        console.table(results);

        mainMenu();
    })
}

const view_roles = () => {
    
    db.getRole().then((results) => {

        console.table(results);

        mainMenu();
    })
}

const view_departments = () => {
    
    db.getDepartment().then((results) => {

        console.table(results);

        mainMenu();
    })
}

