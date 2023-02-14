const connection = require('./connection');

// this is where we make class and add methods to call for each query to the database

class DB {
    constructor(connection){
        this.connection = connection
    }
// pulls data to display into a table
    findEmp(){
        return this.connection.promise().query(`
        SELECT employee.id,
        CONCAT(employee.first_name, ' ', employee.last_name) as Name,
        role.title as 'Role',
        role.salary as 'Salary',
        department.name as 'Department',
        IF(CONCAT(employee.manager_id) IS NULL, 'NULL', CONCAT(manager.first_name, ' ', manager.last_name)) as Manager        
        FROM employee

        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id
        LEFT JOIN employee as manager ON employee.manager_id = manager.id
        ORDER BY employee.id`);
    }

    findRole(){
        return this.connection.promise().query("SELECT * FROM role");
    }

    findDep(){
        return this.connection.promise().query("SELECT * FROM department");
    }

// methods to add data into the table

addEmp(first_name, last_name, role_id, manager_id){
    return this.connection.promise().query(`INSERT INTO employee (employee.first_name, employee.last_name, employee.role_id, employee.manager_id)
    VALUES (${first_name}, ${last_name}, ${role_id}, ${manager_id});`
    )
}
}

module.exports = new DB(connection);