const add_departmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the new department?'
    },
];

const add_roleQuestions = [
    {
      type: "input",
      name: "title",
      message: "Enter the title of the new role:",
    },
    {
      type: "number",
      name: "salary",
      message: "Enter the salary for the new role:",
    },
    {
      type: "list",
      name: "department_id",
      message: "Select the department for the new role:",
      choices: [],
    }
  ];

const add_employeeQuestions = [
    {
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
    type: 'list',
    message: 'What role is this employee?',
    name:'role',
    choices:[],
},
{
    type: 'list',
    message: 'Who will be their manager?',
    name:'manager',
    choices:[],
},
];


const update_employeeQuestions = [
    {
      type: "list",
      message: "Which employee do you want to update?",
      name: "employee_id",
      choices: [],
    },
    {
      type: "list",
      message: "What is the employee's new role?",
      name: "role_id",
      choices: [],
    },
    {
      type: "list",
      name: "managerId",
      message: "Who is the employee's new manager?",
      choices: [],
    },
  ];

module.exports = {add_departmentQuestions, add_roleQuestions,add_employeeQuestions, update_employeeQuestions}