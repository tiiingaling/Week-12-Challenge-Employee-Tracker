const inquirer = require('inquirer');
const EmployeeDatabase = require('./db/EmployeeDatabase');
const db = require('./config/connection');


// connects to the database
db.connect();

// to do:
// view employees
// view roles
// view department
// add employee
// add role
// add department

const view_employees = () => {

    db.getDepartment().then((results) => {

        console.table(results);
    })
}

const view_roles = () => {
    
    db.getRole().then((results) => {

        console.table(results);
    })
}

const view_departments = () => {
    
    db.getDepartment().then((results) => {

        console.table(results);
    })
}