const inquirer = require("inquirer");
require("console.table");
const db = require("./db/EmployeeDatabase");
const {
  add_employeeQuestions,
  add_departmentQuestions,
} = require("./questions");

// to do:
// add employee
// add role
// add department

const mainMenu = () => {
  // runs through the main choices
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "See all employees",
          "See all roles",
          "See all departments",
          "Add an employee",
          "Add a role",
          "Add a new department",
          "Update an employee",
        ],
      },
    ])
    .then((response) => {
      switch (response.choice) {
        case "See all employees":
          view_employees();
          break;
        case "See all roles":
          view_roles();
          break;
        case "See all departments":
          view_departments();
          break;
        case "Add an employee":
          add_employee();
          break;
        case "Add a role":
          add_role();
          break;
        case "Add a new department":
          add_department();
          break;
        case "Update an employee":
          update_employee();
      }
    });
};

const view_employees = () => {
  db.findEmp().then(([results]) => {
    console.table(results);

    mainMenu();
  });
};

const view_roles = () => {
  db.findRole().then(([results]) => {
    console.table(results);

    mainMenu();
  });
};

const view_departments = () => {
  db.findDep().then(([results]) => {
    console.table(results);

    mainMenu();
  });
};

// function to add employee
const add_employee = () => {
  // gets departmental information from the db, to assign role to new employee
  db.findRole().then((results) => {
    const [rows] = results;
    const roleQuestion = add_employeeQuestions[2];
    rows.forEach((role) => {
      const role_summary = `${role.Title} (${role.deparment}: ${role.Salary})`;
      roleQuestion.choices.push({
        value: role.id,
        name: role_summary,
      });
    });
  });
  // gets employee data from db for manager selection
  db.findEmp().then((results) => {
    const [rows] = results;
    const managerQuestion = add_employeeQuestions[3];
    rows.forEach((employee) => {
      managerQuestion.choices.push({
        value: employee.id,
        name: employee.Name,
      });
      // adds an option for no manager
      managerQuestion.choices.push({
        value: null,
        name: "None",
      });
    });
  });

  inquirer.prompt(add_employeeQuestions).then((response) => {
    db.addEmp(response).then((results) => {
      console.log(results);
      mainMenu();
    });
  });
};

const add_role = () => {
  db.addRole();
};

const add_department = () => {
    inquirer.prompt(add_departmentQuestions).then((response) => {
      db.addDep(response).then((departmentId) => {
        console.log(`Added new department with ID ${departmentId}`);
        mainMenu();
      });
    });
  };
  

mainMenu();
