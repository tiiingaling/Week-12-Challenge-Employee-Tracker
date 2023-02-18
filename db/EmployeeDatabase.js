const connection = require("./connection");

// this is where we make class and add methods to call for each query to the database

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  // pulls data to display into a table
  findEmp() {
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
  // pulls role data and displays title and salary
  findRole() {
    return this.connection.promise().query(`SELECT role.id,
        role.title as 'Title',
        CONCAT('£', FORMAT(salary, 0)) as Salary,
        department.name as 'Department'
        FROM role
        
        INNER JOIN Department ON role.department_id = department.id`);
  }

  findDep() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  // methods to add data into the table

  addDep({ department_name }) {
    const sql = `INSERT INTO department (name) VALUES ('${department_name}')`;
    return this.connection
      .promise()
      .query(sql)
      .then((result) => {
        console.log(`Added new department: ${department_name}`);
        return result[0].insertId;
      });
  }

  addRole({ title, salary, department_id }) {
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    const params = [title, salary, department_id];
    console.log(`new role:`, sql, params);
    return this.connection.promise().query(sql, params);
  }

  addEmp({ first_name, last_name, role, manager }) {
    const sql = `INSERT INTO employee
    (employee.first_name, employee.last_name, employee.role_id, employee.manager_id)
    VALUES ('${first_name}', '${last_name}', ${role}, ${manager});`;
    return this.connection.promise().query(sql);
  }

  updateEmpRole({ employee_id, role_id }) {
    const sql = "UPDATE employee SET role_id = ? WHERE id = ?";
    const params = [role_id, employee_id];
    console.log(`this is the params`, params);
    return this.connection.promise().query(sql, params);
  }
}
module.exports = new DB(connection);
