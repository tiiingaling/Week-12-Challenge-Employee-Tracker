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
]

const add_roleQuestions = [

]

const add_departmentQuestions = [
    {
        type: 'input',
        name: 'department_name',
        message: 'What is the name of the new department?'
    },
]

module.exports = {add_employeeQuestions, add_departmentQuestions}